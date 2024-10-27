import { useState, useRef } from "react";
import { Button, styled } from "@mui/material";

// Define the button with progress background styling
interface ProgressButtonProps {
  progress: number;
  isUpload: boolean;
}

interface HoldButtonProps {
  onClick : () => void;
  text : string;
  isUpload? : boolean;
}

const ProgressButtonStyling = styled(Button)<ProgressButtonProps>(({ progress, isUpload }) => ({
  background: isUpload ? `linear-gradient(to right, rgba(255, 0, 0, 0.2) ${progress}%, transparent ${progress}%)` : `linear-gradient(to right, rgba(255, 255, 255, 0.2) ${progress}%, transparent ${progress}%)`,
  color: isUpload ? "red" : "white",
  border: isUpload ? "2px solid red" : "2px solid white",
  borderLeftWidth: "12px", 
  position: "relative",
  borderRadius: "0"
}));

const ProgressButton : React.FC<HoldButtonProps> = ({ onClick, text, isUpload = false }) => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  const handleMouseDown = () => {
    let progressValue = 0;
    timerRef.current = setInterval(() => {
      progressValue += 5;
      setProgress(progressValue);
      if (progressValue >= 130) {
        if (timerRef.current !== null) {
          clearInterval(timerRef.current);
        }

        // * Trigger OnClick event
        onClick()
      }
    }, 20); 
  };

  const handleMouseUp = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
    setProgress(0);
  };

  return (
    <ProgressButtonStyling
      progress={progress}
      disableRipple
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      variant="contained"
      isUpload={isUpload}
    >
      {text}
    </ProgressButtonStyling>
  );
}

export default ProgressButton;
