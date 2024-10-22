import { Button, FormControl, Input } from "@mui/material";
import React, { useRef } from "react";
import usePlayerLog from "../hooks/usePlayerLog";

const UploadForm = () => {
  const { uploadFile } = usePlayerLog();
  const fileInputRef = useRef<HTMLInputElement | null>(null); 

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      uploadFile(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Input
        inputRef={fileInputRef}
        type="file"
        onChange={handleUpload}
        inputProps={{ accept: ".log" }}
        required
        sx={{
          display: "none", 
        }}
      />
      <Button
        variant="outlined"
        component="span"
        onClick={handleButtonClick} 
        sx={{
          border: "3px solid red",
          color: "red",
          height: "100%",
          bgcolor: "transparent",
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        UPLOAD
      </Button>
    </FormControl>
  );
};

export default UploadForm;
