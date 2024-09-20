import useLogs from "../hooks/useLogs";
import Log from "../types/log";

const LogTable = () => {
  const {logData, loading, error} = useLogs();

  if (loading) return <p>Loading logs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Expedition</th>
          <th>Zone</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {logData.map((log : Log) => (
          <tr key={log.id}>
            <td>{log.expedition}</td>
            <td>{log.zone}</td>
            <td>{log.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;