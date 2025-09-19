import React, {
  createContext,
  use,
  useCallback,
  useMemo,
  useState,
} from "react";
import useEscapeKey from "../../lib/useEscapeKey";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = use(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
};

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const pushToast = useCallback((message, variant) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const value = useMemo(
    () => ({ toasts, pushToast, removeToast }),
    [pushToast, removeToast, toasts]
  );

  useEscapeKey(useCallback(() => setToasts([]), []));

  return <ToastContext value={value}>{children}</ToastContext>;
}

export default ToastProvider;
