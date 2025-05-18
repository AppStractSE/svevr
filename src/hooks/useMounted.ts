import { useEffect, useState } from "react";

const useMounted = (delay = 500) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return isMounted;
};

export default useMounted;
