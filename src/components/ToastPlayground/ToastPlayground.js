import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import RadioButtonGroup, { RadioButton } from "../RadioButtonGroup";
import TextArea from "../TextArea";
import { VARIANTS } from "../Toast";
import ToastShelf from "../ToastShelf";
import { useToast } from "../ToastProvider";

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(() => VARIANTS[0]);
  const { pushToast } = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    pushToast(message, variant);
    setMessage("");
    setVariant(VARIANTS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <TextArea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={setMessage}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <RadioButtonGroup value={variant} onChange={setVariant}>
              {VARIANTS.map((option) => (
                <RadioButton value={option} key={option}>
                  {option}
                </RadioButton>
              ))}
            </RadioButtonGroup>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => {}}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
