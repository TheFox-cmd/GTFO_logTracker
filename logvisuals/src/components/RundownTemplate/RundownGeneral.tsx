import { useEffect } from "react";
import RundownLogs from "../../types/RundownLogs";
import Log from "../../types/Log";

type Tier = {
  [tier: string]: string[];
};

interface RundownGeneralProps {
  currentLogs: Log[];
}

const RundownGeneral: React.FC<RundownGeneralProps> = ({ currentLogs }) => {
  let tier: Tier = {};

  useEffect(() => {
    currentLogs.map((log) => {
      let levelTier = log.expedition[2];

      if (tier[levelTier]) {
        if (!tier[levelTier].includes(log.expedition)) {
          tier[levelTier].push(log.expedition);
        }
      } else {
        tier[levelTier] = [log.expedition];
      }
    });
  }, []);

  // console.log(tier)
  // console.log(currentLogs);

  return <>{Object.keys(tier).map((tier) => {
    <div>{tier}</div>
  })}</>;
};

export default RundownGeneral;

// Tier : {String : String[]} ------- B : [R5B1, R5B2, R5B3, R5B4]
// Logs : {String : Log[]} ------- R5B1 : [Log1, Log2, Log3, Log4]
