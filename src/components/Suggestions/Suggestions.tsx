import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { IState, getSuggestions, ISuggestions } from "../../redux/Selectors";
import { composeStyles } from "../../helpers/functionHelpers";
import SuggestionButton from "../SuggestionButton/SuggestionButton";
import styles from "./Suggestions.module.css";
import btnStyles from "../SuggestionButton/SuggestionButton.module.css";

interface SuggestionsProps {
  currentComment: string;
  category: string;
  allSuggestions: ISuggestions;
  onClick(value: string): void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  currentComment,
  allSuggestions,
  category,
  onClick,
}) => {
  const [allSuggestionsMode, setAllSuggestionsMode] = useState(false);

  let showAllMatches: string[] = [];

  if (allSuggestions[category]) {
    showAllMatches = allSuggestions[category];
  }

  if (currentComment.trim()) {
    showAllMatches = showAllMatches.filter((suggestion) => {
      const formattedSuggestion = suggestion.toLowerCase();
      const formattedCurrentComment = currentComment.trim().toLowerCase();

      return (
        formattedSuggestion.startsWith(formattedCurrentComment) &&
        formattedSuggestion !== formattedCurrentComment
      );
    });
  }

  let showLessMatches: string[] = [];

  if (showAllMatches.length > 9) {
    showLessMatches = showAllMatches.slice(0, 9);
  }

  const toggle = () => {
    setAllSuggestionsMode(!allSuggestionsMode);
  };

  if (showAllMatches.length < 10 && showAllMatches.length !== 0) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Previous comments on this category:</p>
        <p className={styles.subTitle}>Tap and hold to delete</p>

        {showAllMatches.map((m) => (
          <SuggestionButton
            key={m}
            category={category}
            title={m}
            onClick={onClick}
          />
        ))}
      </div>
    );
  } else if (showAllMatches.length >= 10 && allSuggestionsMode) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Previous comments on this category:</p>
        <p className={styles.subTitle}>Tap and hold to delete</p>

        {showAllMatches.map((m) => (
          <SuggestionButton
            key={m}
            category={category}
            title={m}
            onClick={onClick}
          />
        ))}
        <button
          className={composeStyles(btnStyles.btn, btnStyles.red)}
          onClick={toggle}
          type="button"
        >
          Hide
        </button>
      </div>
    );
  } else if (showAllMatches.length >= 10 && !allSuggestionsMode) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Previous comments on this category:</p>
        <p className={styles.subTitle}>Tap and hold to delete</p>

        {showLessMatches.map((m) => (
          <SuggestionButton
            key={m}
            category={category}
            title={m}
            onClick={onClick}
          />
        ))}
        <button
          className={composeStyles(btnStyles.btn, btnStyles.red)}
          onClick={toggle}
          type="button"
        >
          Show all
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = (state: IState) => ({
  allSuggestions: getSuggestions(state),
});

export default connect(mapStateToProps)(Suggestions);
