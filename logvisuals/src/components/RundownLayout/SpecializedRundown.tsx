import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import Grid from "@mui/material/Grid2";
import LevelModal from "./LevelModal";
import { useCallback } from "react";

const SpecializedRundown: React.FC<RundownProps> = ({ currentRundown, logData }) => {
  const rundownLogs = useRundownLogs(currentRundown, logData);
  const makeSpecializedProps = useCallback(() => {
    switch (currentRundown) {
        case 6:
            return {
                calcSize: () => 1,
                calcOffset: (level: string) => level === "R6AX" ? 2 : level === "R6BX" ? 1 : 0
            }
        case 7:
            return {
                calcSize: (level: string) => level === "R7A1" ? 3 : level === "R7C2" || level === "R7D2" ? 2 : 1,
                calcOffset: () => 0
            }
        case 8:
            return {
                calcSize: (level: string) => level[3] === "2" && level !== "R8B2" ? 2 : 1,
                calcOffset: (level: string) => level[3] === "2" && level !== "R8B2" ? 1 : 0
            }
        default:
            return {
                calcSize: () => 1,
                calcOffset: () => 0
            }
    }
  }, [currentRundown])
  const {calcOffset, calcSize} = makeSpecializedProps();
  return (
    <>
      <Grid container spacing={2} columns={currentRundown === 7 ? 3 : 4} rowSpacing={12}>
        {Object.keys(rundownLogs).map((tier) => (
          Object.keys(rundownLogs[tier]).map((level) => {
            return (
            <Grid
              offset={calcOffset(level)}
              size={calcSize(level)}
              padding="0 10px 0 65px"
              position="relative"
              data-text={level}
              onClick={() => console.log(rundownLogs[tier][level])}
            >
              <LevelModal level={level} logs={rundownLogs[tier][level]} />
            </Grid>
          )})
        ))}
      </Grid>
    </>
  );
};

export default SpecializedRundown;