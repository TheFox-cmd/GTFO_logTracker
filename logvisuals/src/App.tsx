import "./App.css";
import Display from "./components/Display";
import Box from "@mui/material/Box";
import { useRef, useEffect } from "react";

function App() {
  const cursorTrackerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // ! pause cursor when modal is open
      const xOffset = - (clientX / innerWidth - 0.5) * 15; 
      const yOffset = - (clientY / innerHeight - 0.5) * 15; 

      if (cursorTrackerRef.current) cursorTrackerRef.current.style.transform = `translate(${xOffset}%, ${yOffset}%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Box
        ref={cursorTrackerRef}
        sx={{
          transform: "transform 0.1s ease",
          willChange: "transform",
        }}
      >
        <Display />
      </Box>
    </>
  );
}

export default App;
