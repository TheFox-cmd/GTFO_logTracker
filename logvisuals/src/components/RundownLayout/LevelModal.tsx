import { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Log } from "../../types/Rundown";
import ProgressButton from "../ProgressButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SectorMain from "../../assets/Sector_Main.png";
import SectorSecondary from "../../assets/Sector_Secondary.png";
import SectorOverload from "../../assets/Sector_Overload.png";
import Grid from "@mui/material/Grid2";
import { ParallaxContext } from "../../context/parallax";
interface LevelModalProps {
  level: string;
  logs: Log[];
}

const LevelModal: React.FC<LevelModalProps> = ({ level, logs }) => {
  const setParallax = useContext(ParallaxContext);
  if (!setParallax) return null;
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setParallax(false);
  };
  const handleClose = () => {
    setOpen(false);
    setParallax(true);
  };

  return (
    <>
      <ProgressButton onClick={handleOpen} text={level} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          border="1px solid white"
          color="white"
          width="35vw"
          bgcolor="black"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            outline: "none",
            padding: 3,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h3"
            padding={1}
          >
            {level}
          </Typography>
          <Divider sx={{ borderColor: "gray" }} />
          <List>
            {logs.map((log, index) => (
              <ListItem
                key={log.name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingBottom: 0,
                }}
              >
                <Grid container columns={2} width={"65%"} alignItems={"center"}>
                  <Grid size={1}>
                    <Box
                      justifyContent="center"
                      alignItems="center"
                      component="img"
                      src={
                        log.placement === "Main"
                          ? SectorMain
                          : log.placement === "Secondary"
                          ? SectorSecondary
                          : SectorOverload
                      }
                    />
                  </Grid>
                  <Grid size={1}>
                    <Typography
                      className="modal-modal-description"
                      width="100%"
                      sx={{ textWrap: "nowrap" }}
                    >
                      Zone: {log.zone}
                    </Typography>
                    <Typography
                      className="modal-modal-description"
                      width="100%"
                      sx={{ textWrap: "nowrap" }}
                    >
                      Log ID: {log.name}
                    </Typography>
                    <Typography
                      className="modal-modal-description"
                      width="100%"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {log.note ? `Note: ${log.note}` : ""}
                    </Typography>
                  </Grid>
                </Grid>
                {index < logs.length - 1 && (
                  <Divider
                    sx={{
                      borderColor: "gray",
                      width: "95%",
                      opacity: 0.3,
                      padding: 0,
                    }}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </>
  );
};

export default LevelModal;
