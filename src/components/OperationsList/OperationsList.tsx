import * as React from "react";
import { operationActionInterface } from "../../redux/Operations/operationsActions";
import { checkValue } from "../../helpers/functionHelpers";
import styles from "./OperationList.module.css";

interface OperationsListProps {
  operations: operationActionInterface[];
  onDelete(id: string): void;
  updateBalanceAfterDelete(operationType: string, amount: number): void;
}

const OperationsList: React.FC<OperationsListProps> = ({
  operations,
  onDelete,
  updateBalanceAfterDelete,
}) => {
  if (operations.length === 0) {
    return <p>no data, sorry :(</p>;
  }
  return (
    <div>
      {operations.map((operation) => {
        const hasComment = Boolean(operation.comments);
        return (
          <div className={styles.itemContainer} key={operation.id}>
            <div className={styles.item}>
              <span className={styles[operation.operationType]}>
                {checkValue(operation.amount)} &#8372;
              </span>
              <span className={styles.category}>{operation.category}</span>
              <span className={styles.info}>{operation.createdAt}</span>
              {hasComment && (
                <span className={styles.info}>
                  Comments: {operation.comments}
                </span>
              )}
            </div>
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
  );
};

export default OperationsList;
