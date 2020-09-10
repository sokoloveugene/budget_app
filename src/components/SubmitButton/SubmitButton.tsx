import * as React from "react";
import styles from "./SubmitButton.module.css";

interface SubmitButtonProps {
  title: string;
  style?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title, style = `${styles.btn}` }) => (
  <button className={style} type="submit">
    {title}
  </button>
);

export default SubmitButton;
