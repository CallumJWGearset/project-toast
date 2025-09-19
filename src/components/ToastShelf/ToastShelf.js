import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

/*
 * A toast is:
 * {
 *   id: string;
 *   message: string;
 *   variant: string;
 * }
 * */

function ToastShelf({ toasts, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} close={() => removeToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
