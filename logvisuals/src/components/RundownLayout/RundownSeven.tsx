import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import Grid from "@mui/material/Grid2";
import LevelModal from "./LevelModal";

const RundownSeven: React.FC<RundownProps> = ({ currentRundown, logData }) => {
  const rundownLogs = useRundownLogs(currentRundown, logData);
  return (
    <>
      <Grid container spacing={2} columns={3} rowSpacing={12}>
        {Object.keys(rundownLogs).map((tier) => (
          Object.keys(rundownLogs[tier]).map((level) => (
            <Grid
              size={level === "R7A1" ? 3 : level === "R7C2" || level === "R7D2" ? 2 : 1}
              padding="0 10px 0 65px"
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

export default RundownSeven;
