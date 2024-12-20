import { Log } from "../types/Rundown";
import { useMemo } from "react";

type Level = Record<string, Log[]>;
type Tier = Record<string, Level>;

const useRundownLogs = (currentRundown: number, logData: Log[]) => {
  

  const currentRundownLogs = useMemo<Tier>(() => {
    function getCurrentRundownLogsData() {
      // * Updated Each Log of the Rundown with a Note
      const getLogsByPage = (pageNumber: number) => {
        const prefix: string = `R${pageNumber}`;
        return logData.filter((log: Log) => log.expedition.startsWith(prefix));
      };
  
      const rundownLogs = getLogsByPage(currentRundown);
      let note = "";
      const tier: Tier = {};
  
      rundownLogs.forEach((log: Log) => {
        switch (log.name) {
          case "SK8-G25-G65":
            note = "This log is in the original dimension";
            break;
          case "266-912-663":
            note = "This log is in the giant dimension";
            break;
          case "226-CAQ-PLK":
            note = "This log is in the charger dimension";
            break;
          case "7JH-02P-EWG":
            note = "This log is in the fog dimension";
            break;
          case "FTJ-8GE-T1R":
            note = "This log is in the original dimension";
            break;
          case "2MD-N3H-SYH": 
            note = "This log in R8C1 and R8C2 are canonically the same room";
            break;
          default:
            note = "";
        }
  
        const detailedLog = { ...log, note };
        const difficulty = log.expedition[2];
  
        if (tier[difficulty]) {
          if (tier[difficulty] && tier[difficulty][log.expedition]) tier[difficulty][log.expedition].push(detailedLog);
          else tier[difficulty][log.expedition] = [detailedLog];
        } else tier[difficulty] = { [log.expedition]: [detailedLog] };
      });
  
      console.log(tier);
  
      return tier;
    }
    return getCurrentRundownLogsData();
  }, [currentRundown, logData]);

  return currentRundownLogs;
};

export default useRundownLogs;
