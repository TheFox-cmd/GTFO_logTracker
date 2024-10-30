import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import LevelModal from "./LevelModal";

const RundownEight: React.FC<RundownProps> = ({ currentRundown, logData }) => {
  const rundownLogs = useRundownLogs(currentRundown, logData);
  return (
    <>
      <Grid container spacing={2} columns={4}>
        {Object.keys(rundownLogs).map((tier) => (
          Object.keys(rundownLogs[tier]).map((level) => (
            <Grid
              offset={level[3] === "2" && level !== "R8B2" ? 1 : 0}
              size={level[3] === "2" && level !== "R8B2" ? 2 : 1}
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

export default RundownEight;
