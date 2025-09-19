import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

export const VARIANTS = ["notice", "warning", "success", "error"];

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, isOpen, close }) {
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    isOpen && (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24} />
        </div>
        <p className={styles.content}>{children}</p>
        <button className={styles.closeButton} onClick={close}>
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
    )
  );
}

export default Toast;
