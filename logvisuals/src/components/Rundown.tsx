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
      <Stack>
        {Object.keys(rundownLogs).map((tier) => {
          return (
            <div key={tier}>
              <h2>{tier}</h2>
              {Object.keys(rundownLogs[tier]).map((level) => {
                return (
                  <div key={level}>
                    <h3>{level}</h3>
                    {rundownLogs[tier][level].map((log) => {
                      return (
                        <div key={log.id} className="log">
                          {}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </Stack>
    </>
  );
};

export default Rundown;
// {rundownLogs.map((log) => {
//   return (
//     <Grid
//       container
//       padding="0 20px"
//       border="4px solid white"
//       position="relative"
//       className="content"
//       key={log.expedition}
//     >
//       <Grid
//         padding="0 20px"
//         position="relative"
//         className="text"
//         data-text={log.expedition}
//       >
//         {log.expedition}
//       </Grid>
//       {/* <ul>
//         {rundownLogs[expedition].map((log) => {
//           return (
//             <li key={log.id}>
//               {log.name} {log.zone}
//             </li>
//           );
//         })}
//       </ul> */}
//     </Grid>
//   );
// })}
