import { useEffect, useState } from "react";
import Log from "../types/log";
interface RundownProps {
  currentRundown: number;
  logData: Log[];
}

type level = { 
  [expedition: string]: Log[];
}

const Rundown: React.FC<RundownProps> = ({currentRundown, logData}) => {
  const [rundownLogs, setRundownLogs] = useState<level>({});

  const getLogsByPage = (pageNumber: Number) => {
    const prefix = `R${pageNumber}`;
    return logData.filter((log : Log) => log.expedition.startsWith(prefix));
  };
  
  useEffect(() => {
    const rundownLogs = getLogsByPage(currentRundown);
    let updatedLogs: { [key: string]: Log[] } = {}; 
    let note = "";
  
    rundownLogs.forEach((log) => {
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
        default:
          note = ""; 
      }

      const detailedLog = { ...log, note };
  
      if (!updatedLogs[log.expedition]) {
        updatedLogs[log.expedition] = [detailedLog]; 
      } else {
        updatedLogs[log.expedition].push(detailedLog); 
      }
    });
  
    setRundownLogs(updatedLogs); 
  }, [currentRundown, logData]);
  

  return <>
    {
      Object.keys(rundownLogs).map((expedition) => {
        return (
          <div key={expedition}>
            <h2>{expedition}</h2>
            {/* <ul>
              {rundownLogs[expedition].map((log) => {
                return (
                  <li key={log.id}>
                    {log.name} {log.zone}
                  </li>
                );
              })}
            </ul> */}
          </div>
        );
      })
    }
  </>;
};

export default Rundown;
