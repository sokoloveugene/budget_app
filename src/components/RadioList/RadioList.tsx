import * as React from "react";
import styles from "./RadioList.module.css";

interface RadioListProps {
  name: string;
  options: string[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const RadioList: React.FC<RadioListProps> = ({ name, options, onChange }) => {
  return (
    <>
    <div className={styles.radioListContainer}>
      {options.map((option) => (
        <div key={option} className={styles.formRadioBtn}>
          <input
            name={name}
            id={option}
            onChange={onChange}
            value={option}
            type="radio"
            required
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>    
    </>
  );
};

export default RadioList;
