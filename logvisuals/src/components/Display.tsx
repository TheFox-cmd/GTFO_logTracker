import useLogs from "../hooks/useLogs";
import GameMenu from "./GameMenu";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import FuzzyOverlay from "./FuzzyOverlay";
import { useState } from "react";
import UploadForm from "./UploadForm";
import { Button } from "@mui/material";
import GeneralRundown from "./RundownLayout/GeneralRundown"
import RundownSix from "./RundownLayout/RundownSix";
import RundownSeven from "./RundownLayout/RundownSeven";
import RundownEight from "./RundownLayout/RundownEight";

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
              <Button
                variant="outlined"
                component="span"
                onClick={() => setSelectRundown(false)}
                sx={{
                  border: "3px solid white",
                  color: "white",
                  height: "100%",
                  width: "70%",
                  bgcolor: "transparent",
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                Select Rundown
              </Button>
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
                currentRundown === 6 ? <RundownSix currentRundown={currentRundown} logData={logData} /> : 
                currentRundown === 7 ? <RundownSeven currentRundown={currentRundown} logData={logData} /> :
                currentRundown === 8 ? <RundownEight currentRundown={currentRundown} logData={logData} /> :
                <GeneralRundown currentRundown={currentRundown} logData={logData} />
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
