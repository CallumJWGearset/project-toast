import { useEffect } from "react";

export default function useKeyDown(callback) {
  useEffect(() => {
    window.addEventListener("keydown", callback);

    return () => window.removeEventListener("keydown", callback);
  }, [callback]);
}
