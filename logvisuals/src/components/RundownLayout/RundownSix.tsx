import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import Grid from "@mui/material/Grid2";
import LevelModal from "./LevelModal";

const RundownSix: React.FC<RundownProps> = ({ currentRundown, logData }) => {
  const rundownLogs = useRundownLogs(currentRundown, logData);
  return (
    <>
      <Grid container spacing={2} columns={4}>
        {Object.keys(rundownLogs).map((tier) => (
          Object.keys(rundownLogs[tier]).map((level) => (
            <Grid
              offset={level === "R6AX" ? 2 : level === "R6BX" ? 1 : 0}
              size={1}
              padding="0 20px"
              position="relative"
              data-text={level}
              onClick={() => console.log(rundownLogs[tier][level])}
            >
              <LevelModal level={level} logs={rundownLogs[tier][level]} />
            </Grid>
          ))
        ))}
      </Grid>
    </>
  );
};

export default RundownSix;