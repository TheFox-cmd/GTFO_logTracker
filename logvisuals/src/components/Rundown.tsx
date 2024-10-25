import { useEffect, useState } from "react";
import Log from "../types/Log";
import "./Rundown.css";
import Grid from "@mui/material/Grid2";
import RundownGeneral from "./RundownTemplate/RundownGeneral";
import useRundownLogs from "../hooks/useRundownLogs";
import { Button, Stack } from "@mui/material";
interface RundownProps {
  currentRundown: number;
  logData: Log[];
}

const Rundown: React.FC<RundownProps> = ({ currentRundown, logData }) => {
  const rundownLogs = useRundownLogs(currentRundown, logData);

  return (
    <>
      <Stack spacing={2} width="100%" alignItems="center">
        {Object.keys(rundownLogs).map((tier) => {
          return (
            <Grid
              container
              width="100%"
              justifyContent="space-evenly"
              alignItems="center"
              key={tier}
            >
              {/* Move to rundown layout */}
              {Object.keys(rundownLogs[tier]).map((level) => {
                return (
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    padding="0 20px"
                    border="4px solid white"
                    position="relative"
                    className="content"
                    key={level}
                  >
                    <Grid
                      padding="0 20px"
                      position="relative"
                      className="text"
                      data-text={level}
                      onClick={() => console.log(rundownLogs[tier][level])}
                    >
                      {level}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Stack>
    </>
  );
};

export default Rundown;


// TODO: 
// 1. Refactor Rundown to RundownGeneralLayout
// 2. Refactor Level (Border-left) and progress bar
// 3. New Component for each level
// 4. Render Successful Logs
// 5. Thank you letter and How to upload
// 6. Styling 
// 7. Interactivity 