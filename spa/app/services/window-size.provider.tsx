import { useState, useEffect } from "react";

function getDisplaySize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useDisplaySize() {
  const [displaySize, setDisplaySize] = useState(getDisplaySize());

  useEffect(() => {
    function handleResize() {
      setDisplaySize(getDisplaySize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return displaySize;
}
