"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RotatingText = ({ texts, rotationInterval }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -20 }} // Moves from the top & fades in
      animate={{ opacity: 1, y: 0 }}  // Ends at normal position
      exit={{ opacity: 0, y: 20 }}   // Moves downward & fades out
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      className="text-center"
    >
      {texts[index]}
    </motion.div>
  );
};

export default RotatingText;