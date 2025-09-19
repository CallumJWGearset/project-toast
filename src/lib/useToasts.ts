import { useCallback, useMemo, useState } from "react";

export function useToasts() {
  const [toasts, setToasts] = useState([]);

  const pushToast = (message: string, variant: string) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  };

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return useMemo(
    () => ({
      toasts,
      pushToast,
      removeToast,
    }),
    [removeToast, toasts]
  );
}
