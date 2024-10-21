import { useEffect, useState } from "react";
import Log from "../types/log";

const Rundown = ({ logData }: { logData: Log[] }) => {
  const [currentRundown, setCurrentRundown] = useState<number>(1);
  const [rundownLogs, setRundownLogs] = useState<Log[]>([]);

  const getLogsByPage = (pageNumber: Number) => {
    const prefix = `R${pageNumber}`;
    return logData.filter((log) => log.expedition.startsWith(prefix));
  };

  useEffect(() => {
    setRundownLogs(getLogsByPage(currentRundown));
  }, [currentRundown, logData]);

  return (
    <>
      <h2>Rundown {currentRundown} </h2>
      <div>
        <button
          onClick={() => setCurrentRundown((prev) => Math.max(prev - 1, 1))}
          disabled={currentRundown === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentRundown((prev) => Math.min(prev + 1, 8))}
          disabled={currentRundown === 8}
        >
          Next
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Expedition</th>
            <th>Zone</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rundownLogs.map((log: Log) => (
            <tr key={log.expedition + log.id}>
              <td>{log.expedition}</td>
              <td>{log.zone}</td>
              <td>{log.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Rundown;

// deviation, infection, the vessel, contact, rebirth, destination, rise, duality 

// TODO: 
// * Fuzzy Overlay --------------------------------------------------------- Complete
// * Card Rundowns 
// * upload button (red white right side like clipboard)
// * Table Glitch Levels
// * hyperlexed text 
// * cleared green alert page, grayed out checkmark 