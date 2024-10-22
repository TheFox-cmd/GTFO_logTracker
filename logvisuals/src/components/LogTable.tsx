import useLogs from "../hooks/useLogs";
import usePlayerLog from "../hooks/usePlayerLog";
import Rundown from "./Rundown";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import FuzzyOverlay from "./FuzzyOverlay";

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

  return (
    <>
      <Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          color="white"
        >
          <Grid
            container
            size={2}
            border="1px solid red"
            justifyContent="center"
            alignItems="center"
            // height="100vh"
          >
            Special Thanks
          </Grid>
          <Grid
            container
            size={6}
            border="1px solid red"
            justifyContent="center"
            spacing={2}
            alignItems="center"
            height="100vh"
          >
            <Rundown logData={logData} />
          </Grid>
          <Grid
            container
            size={2}
            border="1px solid red"
            justifyContent="center"
            alignItems="center"
          >
            <form action="/upload" method="post" encType="multipart/form-data">
              <input
                type="file"
                onChange={handleUpload}
                accept=".log"
                required
              />
            </form>
          </Grid>
        </Grid>
        <FuzzyOverlay />
      </Box>
    </>
  );
};

export default LogTable;
