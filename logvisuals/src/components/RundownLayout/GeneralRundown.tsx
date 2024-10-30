import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import LevelModal from "./LevelModal";

const RundownGeneral: React.FC<RundownProps> = ({
  currentRundown,
  logData,
}) => {
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
                    position="relative"
                    key={level}
                  >
                    <Grid
                      position="relative"
                      data-text={level}
                      onClick={() => console.log(rundownLogs[tier][level])}
                    >
                      <LevelModal level={level} logs={rundownLogs[tier][level]} />
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

export default RundownGeneral;
