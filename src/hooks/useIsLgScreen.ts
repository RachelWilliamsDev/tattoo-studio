import { useEffect, useState } from "react";

const useIsLgScreen = () => {
  const [isLg, setIsLg] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLg;
};

export default useIsLgScreen;
