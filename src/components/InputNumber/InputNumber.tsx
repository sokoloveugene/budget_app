import * as React from "react";
import styles from "./InputNumber.module.css";

interface InputNumberProps {
  reference?: React.RefObject<HTMLInputElement>;
  name?: string;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  required?: boolean;
  value?: string;
  step?: string;
  autoFocus?: boolean;
}

const InputNumber: React.FC<InputNumberProps> = ({
  reference,
  name,
  placeholder,
  onChange,
  required,
  value,
  step,
  autoFocus,
}) => {
  return (
    <input
      className={styles.input}
      ref={reference}
      type="number"
      autoFocus={autoFocus}
      inputMode="numeric"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      value={value}
      step={step}
    />
  );
};

export default InputNumber;
