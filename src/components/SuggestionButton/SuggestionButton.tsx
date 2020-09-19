import * as React from "react";
import { connect } from "react-redux";
import { SuggestionDeleteAction } from "../../redux/Suggestion/SuggestionActions";
import styles from "./SuggestionButton.module.css";

interface SuggestionButtonProps {
  title: string;
  category: string;
  onClick(value: string): void;
  deleteSuggestion(category: string, value: string): void;
}

const SuggestionButton: React.FC<SuggestionButtonProps> = ({
  title,
  category,
  onClick,
  deleteSuggestion,
}) => {
  let tapTimer: any;

  const executeDeleting = (m: string) => {
    deleteSuggestion(category, m);
  };

  const tapBtn = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
    m: string
  ) => {
    releaseBtn();
    tapTimer = setTimeout(() => executeDeleting(m), 600);
  };

  const releaseBtn = () => {
    if (tapTimer) {
      clearTimeout(tapTimer);
    }
  };

  return (
    <button
      className={styles.btn}
      type="button"
      onMouseDown={(e) => tapBtn(e, title)}
      onTouchStart={(e) => tapBtn(e, title)}
      onMouseUp={releaseBtn}
      onTouchEnd={releaseBtn}
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  );
};

const masDispatchToProps = (dispatch: (value: any) => void) => ({
  deleteSuggestion: (category: string, value: string) =>
    dispatch(SuggestionDeleteAction(category, value)),
});

export default connect(null, masDispatchToProps)(SuggestionButton);
