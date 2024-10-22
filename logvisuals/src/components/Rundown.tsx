import { useEffect, useState } from "react";
import Log from "../types/log";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import R1 from "../assets/ALT_R1_Banner.png";
import R2 from "../assets/ALT_R2_Banner.png";
import R3 from "../assets/ALT_R3_Banner.png";
import R4 from "../assets/ALT_R4_Banner.png";
import R5 from "../assets/ALT_R5_Banner.png";
import R6 from "../assets/ALT_R6_Banner.png";
import R7 from "../assets/R7Banner.png";
import R8 from "../assets/R8Banner.png";
import Stack from "@mui/material/Stack";

const Rundown = ({ logData }: { logData: Log[] }) => {
  const [currentRundown, setCurrentRundown] = useState<number>(1);
  const [rundownLogs, setRundownLogs] = useState<Log[]>([]);

  const getLogsByPage = (pageNumber: Number) => {
    const prefix = `R${pageNumber}`;
    return logData.filter((log) => log.expedition.startsWith(prefix));
  };

  useEffect(() => {
    setRundownLogs(getLogsByPage(currentRundown));
  }, [currentRundown, logData]);

  return (
    <Stack spacing={2} width="100%" alignItems="center">
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component={"img"}
          image={R1}
          title="ALT://RUNDOWN 1.0 - DEVIATION"
          sx={{
            height: "8vh",
          }}
        />
      </Card>
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component={"img"}
          image={R2}
          title="ALT://RUNDOWN 2.0 - INFECTION"
          sx={{
            height: "8vh",
            objectFit: "cover", 
            objectPosition: "0 22%",
            // transform: "translateY(40%)",
          }}
        />
      </Card>
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
        }}
      >
        <CardMedia
          component={"img"}
          image={R3}
          title="ALT://RUNDOWN 3.0 - THE VESSEL"
          sx={{
            height: "8vh",
          }}
        />
      </Card>
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
        }}
      >
        <CardMedia
          component={"img"}
          image={R4}
          title="ALT://RUNDOWN 4.0 - CONTACT"
          sx={{
            height: "8vh",
          }}
        />
      </Card>
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
        }}
      >
        <CardMedia
          component={"img"}
          image={R5}
          title="ALT://RUNDOWN 5.0 - REBIRTH"
          sx={{
            height: "8vh",
          }}
        />
      </Card>
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
        }}
      >
        <CardMedia
          component={"img"}
          image={R6}
          title="ALT://RUNDOWN 6.0 - DESTINATION"
          sx={{
            height: "8vh",
          }}
        />
      </Card>
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
        }}
      >
        <CardMedia
          component={"img"}
          image={R7}
          title="RUNDOWN 7.0 - RISE"
          sx={{
            height: "8vh",
          }}
        />
      </Card>
      <Card
        sx={{
          width: "40%",
          bgcolor: "transparent", 
          boxShadow: "none", 
          position: "relative",
        }}
      >
        <CardMedia
          component={"img"}
          image={R8}
          title="RUNDOWN 8.0 - DUALITY"
          sx={{
            height: "8vh",
          }}
        />
      </Card>
    </Stack>
  );
};

export default Rundown;

// deviation, infection, the vessel, contact, rebirth, destination, rise, duality

// TODO:
// * Fuzzy Overlay --------------------------------------------------------- Complete
// * Card Rundowns
// * upload button (red white right side like clipboard)
// * Table Glitch Levels
// * hyperlexed text
// * cleared green alert page, grayed out checkmark
