import { useEffect, useState } from "react";
import Log from "../types/Log";
import "./Rundown.css";
import Grid from "@mui/material/Grid2";
import RundownGeneral from "./RundownTemplate/RundownGeneral";
import useRundownLogs from "../hooks/useRundownLogs";
import { Stack } from "@mui/material";
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
                    >
                      {level}
                    </Grid>
                    {rundownLogs[tier][level].map((log) => {
                      return (
                        <div key={log.id} className="log">
                          {}
                        </div>
                      );
                    })}
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