import { useEffect, useState } from "react";

const useIsLgScreen = () => {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024); // lg breakpoint is 1024px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLg;
};

export default useIsLgScreen;
