import * as React from "react";
import styles from "./SwitchBtn.module.css";
import { connect } from "react-redux";
import { IState, isDarkTheme } from "../../redux/Selectors";
import { changeTheme } from "../../redux/Theme/ThemeActions";

interface SwitchBtnProps {
  isDark: boolean;
  changeTheme(value: boolean): void;
}

const SwitchBtn: React.FC<SwitchBtnProps> = ({ isDark, changeTheme }) => {
  const handleChange = () => {
    changeTheme(!isDark);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="toggle-button" className={styles.text}>
        Apperance
      </label>
      <input
        onChange={handleChange}
        type="checkbox"
        id="toggle-button"
        className={styles.toggleButton}
        checked={isDark}
      />
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  isDark: isDarkTheme(state),
});

const mapDispatchToProps = (dispatch: (value: any) => void) => ({
  changeTheme: (value: boolean) => dispatch(changeTheme(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchBtn);
