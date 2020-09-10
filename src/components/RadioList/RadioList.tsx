import * as React from "react";
import { connect } from "react-redux";
import { composeStyles } from "../../helpers/functionHelpers";
import { isDarkTheme, IState } from "../../redux/Selectors";

import styles from "./RadioList.module.css";

interface RadioListProps {
  name: string;
  options: string[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  isDark: boolean;
}

const RadioList: React.FC<RadioListProps> = ({
  name,
  options,
  onChange,
  isDark,
}) => {
  return (
    <>
      <div className={styles.radioListContainer}>
        {options.map((option) => (
          <div
            key={option}
            className={
              isDark
                ? composeStyles(styles.formRadioBtn, styles.formRadioBtnDark)
                : styles.formRadioBtn
            }
          >
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

const mapStateToProps = (state: IState) => ({
  isDark: isDarkTheme(state),
});

export default connect(mapStateToProps)(RadioList);
