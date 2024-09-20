import useLogs from "../hooks/useLogs";
import Log from "../types/log";
import "./LogTable.css";

const updatedList = [644899579]
const completionList = [2159521601, 779237148]

const LogTable = () => {
  const { logData, loading, error } = useLogs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Expedition</th>
            <th>Zone</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {logData.map((log: Log) => (
            <tr
              key={log.expedition + log.id}
              className={`log ${
                updatedList.includes(log.id) ? "updated" : completionList.includes(log.id) ? "completed" : "not-completed"
              }`}
            >
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

export default LogTable;
