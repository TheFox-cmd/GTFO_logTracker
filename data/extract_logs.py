import json
import re
from collections import defaultdict

filepath = "C:\Program Files (x86)\Steam\steamapps\common\GTFO\BepInEx\GameData-Dump\\34855\GameData_LevelLayoutDataBlock_bin.json"

all_logs = []

# manually add logs that are not in the json file
all_logs.append({
  'expedition': "R7C2",
  'zone': "Alpha Six",
  'id': 3979312916,
  'name': "D3T-INI-FNI",
})

def convertZone(zone: str) -> str: 
  pattern = 'R(undown0*)?([1-8])[_ ]*([A-E])[_ ]?([1-4])?'

  match = re.match(pattern, zone)

  if not match: return "Error"

  rundown = match.group(2)
  tier = match.group(3)
  level = match.group(4)
  return f'R{rundown}{tier}{level}'    

with open(filepath, "r") as file:
  data = json.load(file)['Blocks']

  log_count = 0
  for block in data: 
    # get expedition name
    expedition = convertZone(block['name'])
    
    zones = block['Zones']
    for zone in zones: 
      if "TerminalPlacements" not in zone: continue  

      # Combine terminal information from both "SpecificTerminalSpawnDatas" and "TerminalPlacements"
      terminal_sources = []

      # Collect terminals from SpecificTerminalSpawnDatas if present
      if "SpecificTerminalSpawnDatas" in zone:
          terminal_sources.extend(zone["SpecificTerminalSpawnDatas"])

      # Collect terminals from TerminalPlacements
      if "TerminalPlacements" in zone:
          terminal_sources.extend(zone["TerminalPlacements"])

      # Iterate over all collected terminal sources to extract log information
      for terminal in terminal_sources:
          if terminal["LocalLogFiles"] == []: 
              continue

          terminalInfoList = terminal["LocalLogFiles"]
          for terminalInfo in terminalInfoList:
              # Check if required keys are present
              if "FileContent" not in terminalInfo or "FileName" not in terminalInfo: 
                  continue

              # Determine the log zone based on conditions
              log_zone = block["ZoneAliasStart"] + zone["LocalIndex"] if zone["AliasOverride"] == -1 else zone["AliasOverride"]
              log_id = terminalInfo["FileContent"]
              log_name = terminalInfo["FileName"]

              # Validate log_id
              if log_id == "" or log_id == 0: 
                  continue

              log_count += 1

              # Create a new log entry and add it to the all_logs list
              if expedition == "R6A2": expedition = "R6AX"
              elif expedition == "R6B3": expedition = "R6BX"
              elif expedition == "R6C4": expedition = "R6CX"
              
              new_log = {"expedition": expedition, "zone": log_zone, "id": log_id, "name": log_name}
              all_logs.append(new_log)

  all_logs.sort(key=lambda x: x["expedition"])

freq = defaultdict(int)
for log in all_logs:
  print(log)
  freq[log["expedition"][:2]] += 1

print(freq)
print("Total: " + str(log_count))

# Write the wrapped log_data to log.json
with open('./logvisuals/public/logs.json', 'w') as file:
    json.dump(all_logs, file, indent=4)

print("Data has been written to logs.json")