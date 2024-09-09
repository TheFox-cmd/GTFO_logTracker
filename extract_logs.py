import json
import re

filepath = "C:\Program Files (x86)\Steam\steamapps\common\GTFO\BepInEx\GameData-Dump\\34855\GameData_LevelLayoutDataBlock_bin.json"

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

  count = 0
  for block in data: 
    # get expedition name
    expedition = convertZone(block['name'])
    
    zones = block['Zones']
    for zone in zones: 
      if "TerminalPlacements" not in zone: continue  

      # iterate terminals of each zone to get log info
      for terminal in zone["TerminalPlacements"]:
        if terminal["LocalLogFiles"] == []: continue

        terminalInfo = terminal["LocalLogFiles"][0]
        if "FileContent" not in terminalInfo or "FileName" not in terminalInfo: continue

        log_zone = block["ZoneAliasStart"] + zone["LocalIndex"] if zone["AliasOverride"] == -1 else zone["AliasOverride"]
        log_id = terminalInfo["FileContent"]
        log_name = terminalInfo["FileName"]
        
        count += 1
        print(expedition, log_zone, log_id, log_name)

  print("Total: " + str(count))
