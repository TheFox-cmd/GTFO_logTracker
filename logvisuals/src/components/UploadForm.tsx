import { Button, FormControl, Input } from "@mui/material";
import React, { useRef } from "react";
import usePlayerLog from "../hooks/usePlayerLog";
import ProgressButton from "./ProgressButton";

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
      <ProgressButton onClick={handleButtonClick} text={"UPLOAD"} isUpload />
    </FormControl>
  );
};

export default UploadForm;

