import { useEffect, useState } from "react";
import Log from "../types/log";
interface RundownProps {
  currentRundown: number;
  logData: Log[];
}

const Rundown: React.FC<RundownProps> = ({currentRundown, logData}) => {
  const [rundownLogs, setRundownLogs] = useState<Log[]>([]);

  const getLogsByPage = (pageNumber: Number) => {
    const prefix = `R${pageNumber}`;
    return logData.filter((log : Log) => log.expedition.startsWith(prefix));
  };

  useEffect(() => {
    setRundownLogs(getLogsByPage(currentRundown));
  }, [currentRundown, logData]);

  return <>
    {rundownLogs.map((log) => (
      <div key={log.id}>{log.expedition}</div>
    ))}
  </>;
};

export default Rundown;
