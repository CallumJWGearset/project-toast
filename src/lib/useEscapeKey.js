import useKeyDown from "../hooks/useKeyDown";

export default function useEscapeKey(callback) {
  useKeyDown((event) => {
    if (event.code === "Escape") {
      callback();
    }
  });
}
