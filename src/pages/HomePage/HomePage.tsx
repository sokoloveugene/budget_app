import * as React from "react";
import ShowData from "../../components/ShowData/ShowData";
import { connect } from "react-redux";
import {
  IState,
  getBalance,
  sumAllSpends,
  sumAllIncomes,
} from "../../redux/Selectors";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

import { getAllOperations } from "../../redux/Selectors";
import { deleteOperation } from "../../redux/Operations/operationsActions";
import { updateBalanceAfterDelete } from "../../redux/SetBalance/SetBalanceActions";

import OperationsList from "../../components/OperationsList/OperationsList";

const mstp = (state: IState) => ({
  operations: getAllOperations(state),
});

const mdtp = (dispatch: (value: any) => void) => ({
  onDelete: (id: string) => dispatch(deleteOperation(id)),
  updateBalanceAfterDelete: (operationType: string, amount: number) =>
    dispatch(updateBalanceAfterDelete(operationType, amount)),
});

const AllOperationsList = connect(mstp, mdtp)(OperationsList);

interface HomePageProps {
  balance: number;
  allExpenses: number;
  allIncomes: number;
}

const HomePage: React.FC<HomePageProps> = ({
  balance,
  allExpenses,
  allIncomes,
}) => {
  return (
    <>
      <ShowData
        redirectLink="/change_balance"
        title="balance"
        value={balance}
      />
      <ShowData
        redirectLink="/all_expenses"
        title="total spend"
        value={allExpenses}
      />
      <ShowData
        redirectLink="/all_incomes"
        title="total incomes"
        value={allIncomes}
      />

      <Link className={styles.addOperationBtn} to="/add_operation">
        +
      </Link>
      <AllOperationsList />
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  balance: getBalance(state),
  allExpenses: sumAllSpends(state),
  allIncomes: sumAllIncomes(state),
});

export default connect(mapStateToProps)(HomePage);
