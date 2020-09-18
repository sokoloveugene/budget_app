import * as React from "react";
import { Component } from "react";
import NoData from "../NoData/NoData";
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

interface OperationsListState {
  showModal: boolean;
  idToDelete: string;
  typeToDelete: string;
  amountToDelete: number;
}

class OperationsList extends Component<
  OperationsListProps,
  OperationsListState
> {
  state = {
    showModal: false,
    idToDelete: "",
    typeToDelete: "",
    amountToDelete: 0,
  };

  resetState = () => {
    this.setState({
      showModal: false,
      idToDelete: "",
      typeToDelete: "",
      amountToDelete: 0,
    });
  };

  closeModalOnBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    this.resetState();
  };

  confirmedDeleteOperation = (
    id: string,
    operationType: string,
    amount: number
  ) => {
    this.props.onDelete(id);
    this.props.updateBalanceAfterDelete(operationType, amount);
    this.resetState();
  };

  render() {
    const { showModal, idToDelete, typeToDelete, amountToDelete } = this.state;
    const { title, operations, isDark } = this.props;

    if (operations.length === 0) {
      return <NoData />;
    }

    return (
      <>
        {title && <h3 className={styles.title}>{title}</h3>}

        {showModal && (
          <div
            onClick={this.closeModalOnBackdropClick}
            className={styles.backdrop}
          >
            <div
              className={
                isDark
                  ? composeStyles(styles.modalContent, styles.modalDark)
                  : styles.modalContent
              }
            >
              <p className={styles.question}>
                Do you really want to delete this operation?
              </p>
              <button
                className={styles.button}
                onClick={() => this.resetState()}
              >
                Cancel
              </button>
              <button
                className={composeStyles(styles.button, styles.deleteBtn)}
                onClick={() =>
                  this.confirmedDeleteOperation(
                    idToDelete,
                    typeToDelete,
                    amountToDelete
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        )}

        <div className={styles.operationsContainer}>
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
                    this.setState({
                      showModal: true,
                      idToDelete: operation.id,
                      typeToDelete: operation.operationType,
                      amountToDelete: operation.amount,
                    });
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
  }
}

const mapStateToProps = (state: IState) => ({
  isDark: isDarkTheme(state),
});

export default connect(mapStateToProps)(OperationsList);
