import useRundownLogs from "../../hooks/useRundownLogs";
import { RundownProps } from "../../types/Rundown";
import { Stack } from "@mui/material";
import LevelModal from "./LevelModal";

const rundownTierWidths: Record<number, string[]> = {
  1: ["100%", "80%", "90%", "80%", "60%"],
  2: ["100%", "80%", "90%", "80%", "60%"],
  3: ["100%", "80%", "90%", "80%", "60%"],
  4: ["100%", "80%", "90%", "80%", "60%"],
  5: ["100%", "80%", "90%", "80%", "60%"],
}

const RundownGeneral: React.FC<RundownProps> = ({
  currentRundown,
  logData,
}) => {
  const rundownLogs = useRundownLogs(currentRundown, logData);
  return (
    <>
      <Stack direction="column" spacing={12} justifyContent={"center"} alignItems={"center"}>
        {Object.keys(rundownLogs).map((tier, idx) => (
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            position="relative"
            width={rundownTierWidths[currentRundown][idx]}
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
