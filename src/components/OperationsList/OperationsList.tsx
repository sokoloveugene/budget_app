import * as React from "react";
import { operationActionInterface } from "../../redux/Operations/operationsActions";
import { checkValue } from "../../helpers/functionHelpers";
import styles from "./OperationList.module.css";
import { connect } from "react-redux";
import { IState, isDarkTheme } from "../../redux/Selectors";
import { composeStyles } from "../../helpers/functionHelpers";
import sprite from "../../svgSprite.svg";

interface OperationsListProps {
  isDark: boolean;
  operations: operationActionInterface[];
  title?: string;
  onDelete(id: string): void;
  updateBalanceAfterDelete(operationType: string, amount: number): void;
}

const OperationsList: React.FC<OperationsListProps> = ({
  isDark,
  title,
  operations,
  onDelete,
  updateBalanceAfterDelete,
}) => {
  if (operations.length === 0) {
    return <p>no data, sorry :(</p>;
  }
  return (
    <>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div>
        {operations.map((operation) => {
          const hasComment = Boolean(operation.comments);
          return (
            <div
              className={
                isDark
                  ? composeStyles(
                      styles.itemContainer,
                      styles.itemContainerDark
                    )
                  : styles.itemContainer
              }
              key={operation.id}
            >
              <div className={styles.iconContainer}>
                <svg
                  className={
                    isDark
                      ? composeStyles(styles.svg, styles.svgDark)
                      : styles.svg
                  }
                >
                  <use href={sprite + `#${operation.category}`} />
                </svg>
              </div>
              <div className={styles.categoryDateBlock}>
                <span
                  className={
                    isDark
                      ? composeStyles(styles.category, styles.categoryDark)
                      : styles.category
                  }
                >
                  {operation.category}
                </span>
                <span className={styles.date}>{operation.createdAt}</span>
                {hasComment && (
                  <span className={styles.comments}>
                    Comments: {operation.comments}
                  </span>
                )}
              </div>

              <span className={styles[operation.operationType]}>
                {checkValue(operation.amount)} &#8372;
              </span>
              <button
                onClick={() => {
                  onDelete(operation.id);
                  updateBalanceAfterDelete(
                    operation.operationType,
                    operation.amount
                  );
                }}
                className={styles.btn}
              >
                &#10005;
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  isDark: isDarkTheme(state),
});

export default connect(mapStateToProps)(OperationsList);
