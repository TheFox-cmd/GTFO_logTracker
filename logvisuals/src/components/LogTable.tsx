import useLogs from "../hooks/useLogs";
import usePlayerLog from "../hooks/usePlayerLog";
import Rundown from "./Rundown";

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
      </form>
      <Rundown logData={logData} />
    </>
  );
};

export default LogTable;
