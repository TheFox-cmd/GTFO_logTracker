import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import R1 from "../assets/ALT_R1_Banner.png";
import R2 from "../assets/ALT_R2_Banner.png";
import R3 from "../assets/ALT_R3_Banner.png";
import R4 from "../assets/ALT_R4_Banner.png";
import R5 from "../assets/ALT_R5_Banner.png";
import R6 from "../assets/ALT_R6_Banner.png";
import R7 from "../assets/R7Banner.png";
import R8 from "../assets/R8Banner.png";
import Stack from "@mui/material/Stack";
import { ReactSetState } from "../types/Utils";

interface GameMenuProps {
  setCurrentRundown: ReactSetState<number>;
  setSelectRundown: ReactSetState<boolean>;
}

type MenuItem = {
  image: string;
  title: string;
};

const Menus: MenuItem[] = [
  {
    image: R1,
    title: "ALT://RUNDOWN 1.0 - DEVIATION",
  },
  {
    image: R2,
    title: "ALT://RUNDOWN 2.0 - INFECTION",
  },
  {
    image: R3,
    title: "ALT://RUNDOWN 3.0 - THE VESSEL",
  },
  {
    image: R4,
    title: "ALT://RUNDOWN 4.0 - CONTACT",
  },
  {
    image: R5,
    title: "ALT://RUNDOWN 5.0 - REBIRTH",
  },
  {
    image: R6,
    title: "ALT://RUNDOWN 6.0 - DESTINATION",
  },
  {
    image: R7,
    title: "RUNDOWN 7.0 - RISE",
  },
  {
    image: R8,
    title: "RUNDOWN 8.0 - DUALITY",
  },
];

const GameMenu: React.FC<GameMenuProps> = ({
  setCurrentRundown,
  setSelectRundown,
}) => {
  const makeMediaStyle = (id: number) => {
    const commonMediaStyle = {
      height: "8vh",
      transition: "height 0.3s cubic-bezier(0.4, 0.8, 0.25, 1)",
      "&:hover": {
        height: "12vh",
      },
    };
    if (id === 1)
      return {
        ...commonMediaStyle,
        objectFit: "cover",
        objectPosition: "0 22%",
      };
    else return commonMediaStyle;
  };

  return (
    <Stack spacing={2} width="100%" alignItems="center">
      {Menus.map((item, idx) => (
        <Card
          sx={{
            width: "40%",
            bgcolor: "transparent",
            boxShadow: "none",
            position: "relative",
          }}
          onClick={() => {
            setCurrentRundown(idx + 1);
            setSelectRundown(true);
          }}
          key={idx}
        >
          <CardMedia
            component={"img"}
            image={item.image}
            title={item.title}
            sx={makeMediaStyle(idx)}
          />
        </Card>
      ))}
    </Stack>
  );
};

export default GameMenu;

// TODO:
// * Fuzzy Overlay --------------------------------------------------------- Complete
// * Card Rundowns --------------------------------------------------------- Complete
// * upload button (red white right side like clipboard) ------------------- Complete
// * Table Glitch Levels --------------------------------------------------- Complete
// * Hyperplexed text & Drawer
// * Cleared green alert page, grayed out checkmark
// * Thanks & Relative Info
// * Transition from GameMenu to Rundown
// * Music & Background
// * Deployment
