import useLogs from "../hooks/useLogs";
import GameMenu from "./GameMenu";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import FuzzyOverlay from "./FuzzyOverlay";
import { useState } from "react";
import UploadForm from "./UploadForm";
import GeneralRundown from "./RundownLayout/GeneralRundown";
import ProgressButton from "./ProgressButton";
import SpecializedRundown from "./RundownLayout/SpecializedRundown";

const Display = () => {
  const { logData, loading, error } = useLogs();
  const [currentRundown, setCurrentRundown] = useState<number>(0);
  const [selectRundown, setSelectRundown] = useState<boolean>(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Box>
        <Grid
          container
          alignItems="center"
          color="white"
          columns={10}
          height={"100vh"}
        >
          <Grid size={2} justifyContent="center" alignItems="center">
            {/* Special Thanks */}
            {selectRundown ? (
              <ProgressButton
                onClick={() => setSelectRundown(false)}
                text={"SELECT RUNDOWN"}
              />
            ) : (
              <div></div>
            )}
          </Grid>
          <Grid size={6}>
            {selectRundown ? (
              [6,7,8].includes(currentRundown) ? (
                <SpecializedRundown currentRundown={currentRundown} logData={logData} />
              ) : (
                <GeneralRundown
                  currentRundown={currentRundown}
                  logData={logData}
                />
              )
            ) : (
              <GameMenu
                setCurrentRundown={setCurrentRundown}
                setSelectRundown={setSelectRundown}
              />
            )}
          </Grid>
          <Grid size={2}>
            <UploadForm />
          </Grid>
        </Grid>
        <FuzzyOverlay />
      </Box>
    </>
  );
};

export default Display;
