import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import { Stack } from "@mui/material";
import LevelModal from "./LevelModal";

const RundownGeneral: React.FC<RundownProps> = ({
  currentRundown,
  logData,
}) => {
  const rundownLogs = useRundownLogs(currentRundown, logData);
  return (
    <>
      {/* <Stack spacing={2} width="100%" alignItems="center"> */}
      <Stack direction="column" spacing={12}>
        {Object.keys(rundownLogs).map((tier) => (
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            position="relative"
            key={tier}
          >
            {Object.keys(rundownLogs[tier]).map((level) => {
              return (
                <LevelModal level={level} logs={rundownLogs[tier][level]} />
              );
            })}
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default RundownGeneral;
