import useLogs from "../hooks/useLogs";
import Log from "../types/log";
import "./LogTable.css";
import { useState, useEffect } from "react";
import usePlayerLog from "../hooks/usePlayerLog";

const updatedList = [644899579];
const completionList = [2159521601, 779237148];

const LogTable = () => {
  const { logData, loading, error } = useLogs();
  const { logsRead, confirmedIDs, unconfirmedIDs, uploadFile } = usePlayerLog();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      uploadFile(event.target.files[0]);
    }
  };


  console.log(logsRead);
  console.log(confirmedIDs);
  console.log(unconfirmedIDs);

  return (
    <>
      <form action="/upload" method="post" encType="multipart/form-data">
        <input type="file" onChange={handleUpload} accept=".log" required />
        <button type="submit">Upload</button>
      </form>
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
                updatedList.includes(log.id)
                  ? "updated"
                  : completionList.includes(log.id)
                  ? "completed"
                  : "not-completed"
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
