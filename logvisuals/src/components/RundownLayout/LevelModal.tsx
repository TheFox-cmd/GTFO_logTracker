import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Log } from "../../types/Rundown";
import { Stack } from "@mui/material";
import ProgressButton from "../ProgressButton";

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
        <Box border="1px solid white" color="white">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {level}
          </Typography>
          {logs.map((log) => {
            return ( 
              <Stack key={log.id} spacing={2}>
                <Typography className="modal-modal-description" sx={{ mt: 2 }}>
                  {log.zone}
                </Typography>
                <Typography className="modal-modal-description" sx={{ mt: 2 }}>
                  {log.name}
                </Typography>
                <Typography className="modal-modal-description" sx={{ mt: 2 }}>
                  {log.note}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

export default LevelModal;
