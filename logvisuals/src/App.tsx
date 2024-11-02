import "./App.css";
import Display from "./components/Display";
import Box from "@mui/material/Box";
import { useRef, useEffect, useState } from "react";
import { ParallaxContext } from "./context/parallax";

function App() {
  const cursorTrackerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(true);

  useEffect(() => {
    let lastXOffset: number;
    let lastYOffset: number;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const xOffset = - (clientX / innerWidth - 0.5) * 7; 
      const yOffset = - (clientY / innerHeight - 0.5) * 7 ; 

      if (parallax) {
        lastXOffset = xOffset;
        lastYOffset = yOffset;
      }

      if (cursorTrackerRef.current) cursorTrackerRef.current.style.transform = parallax ? `translate(${xOffset}%, ${yOffset}%)` : `translate(${lastXOffset}%, ${lastYOffset}%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [parallax]);

  return (
    <>
      <ParallaxContext.Provider value={setParallax}>
      <Box
        ref={cursorTrackerRef}
        sx={{
          width: "100%",
          height: "100%",
          transform: "transform 0.1s ease",
          willChange: "transform",
        }}
      >
        <Display />
      </Box>
      </ParallaxContext.Provider>
    </>
  );
}

export default App;
