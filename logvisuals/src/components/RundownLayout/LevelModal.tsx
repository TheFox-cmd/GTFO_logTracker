import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Log } from "../../types/Rundown";
import { Stack } from "@mui/material";
import ProgressButton from "../ProgressButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

interface LevelModalProps {
  level: string;
  logs: Log[];
}

const LevelModal: React.FC<LevelModalProps> = ({ level, logs }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(level, logs);

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
            padding: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h3" component="h3">
            {level}
          </Typography>
          <Divider sx={{ borderColor: "gray", padding: 1 }} />
          <List>
            {logs.map((log, index) => (
              <ListItem
                key={log.name}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography className="modal-modal-description" width="100%">
                  Zone: {log.zone}
                </Typography>
                <Typography className="modal-modal-description" width="100%">
                  Log ID: {log.name}
                </Typography>
                <Typography className="modal-modal-description" width="100%">
                  {log.note ? `Note: ${log.note}` : ""}
                </Typography>
                {index < logs.length - 1 && (
                  <Divider
                    sx={{
                      borderColor: "gray",
                      width: "95%",
                      opacity: 0.3,
                      padding: 1,
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
