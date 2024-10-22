import useLogs from "../hooks/useLogs";
import usePlayerLog from "../hooks/usePlayerLog";
import GameMenu from "./GameMenu";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import FuzzyOverlay from "./FuzzyOverlay";
import { useState } from "react";
import Rundown from "./Rundown";
import UploadForm from "./UploadForm";


const LogTable = () => {
  const { logData, loading, error } = useLogs();
  const [currentRundown, setCurrentRundown] = useState<number>(0);
  const [selectRundown, setSelectRundown] = useState<Boolean>(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



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
            {/* Special Thanks */}
            {selectRundown ? (
              <button onClick={() => setSelectRundown(false)}>Select Rundown</button>
            ) : (
              <div></div>
            )}
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
            {selectRundown ? (
              <Rundown currentRundown={currentRundown} logData={logData} />
            ) : (
              <GameMenu
                setCurrentRundown={setCurrentRundown}
                setSelectRundown={setSelectRundown}
              />
            )}
          </Grid>
          <Grid
            container
            size={2}
            border="1px solid red"
            justifyContent="center"
            alignItems="center"
          >
            <UploadForm />
          </Grid>
        </Grid>
        <FuzzyOverlay />
      </Box>
    </>
  );
};

export default LogTable;
