import * as React from "react";
import { connect } from "react-redux";
import { IState, getSuggestions, ISuggestions } from "../../redux/Selectors";
import { SuggestionDeleteAction } from "../../redux/Suggestion/SuggestionActions";

import styles from "./Suggestions.module.css";

interface SuggestionsProps {
  category: string;
  allSuggestions: ISuggestions;
  onClick(value: string): void;
  deleteSuggestion(category: string, value: string): void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  allSuggestions,
  category,
  onClick,
  deleteSuggestion,
}) => {
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    m: string
  ): void => {
    deleteSuggestion(category, m);
  };

  let matches: string[] = [];
  if (allSuggestions[category]) {
    matches = allSuggestions[category];
  }
  return (
    <>
      {matches.length > 0 && (
        <div className={styles.container}>
          <p className={styles.title}>Previous comments on this category:</p>
          <p className={styles.subTitle}>Double click to delete</p>

          {matches.map((m) => (
            <button
              className={styles.btn}
              type="button"
              data-value={m}
              onDoubleClick={(e) => handleDelete(e, m)}
              onClick={() => onClick(m)}
              key={m}
            >
              {m}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  allSuggestions: getSuggestions(state),
});

const masDispatchToProps = (dispatch: (value: any) => void) => ({
  deleteSuggestion: (category: string, value: string) =>
    dispatch(SuggestionDeleteAction(category, value)),
});

export default connect(mapStateToProps, masDispatchToProps)(Suggestions);
