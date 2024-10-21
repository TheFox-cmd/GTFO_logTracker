import { motion } from "framer-motion";
import blackNoise from "../assets/black-noise.png"; 

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: `url(${blackNoise})`,
        pointerEvents: "none",
        position: "absolute",
        top: "-100%",
        left: "-100%",
        bottom: "-100%",
        right: "-100%",
        opacity: "0.15",
      }}
    />
  );
};

export default FuzzyOverlay;
