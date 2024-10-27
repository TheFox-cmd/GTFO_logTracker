import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import LevelModal from "./LevelModal";

const RundownEight: React.FC<RundownProps> = ({ currentRundown, logData }) => {
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
                      <LevelModal
                        level={level}
                        logs={rundownLogs[tier][level]}
                      />
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

export default RundownEight;
