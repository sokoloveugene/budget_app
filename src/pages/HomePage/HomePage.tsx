import * as React from "react";
import CreditCardData from "../../components/CreditCardData/CreditCardData";
import { connect } from "react-redux";
import { IState, getBalance } from "../../redux/Selectors";
import { Link } from "react-router-dom";
import { getAllOperations } from "../../redux/Selectors";
import { deleteOperation } from "../../redux/Operations/operationsActions";
import { updateBalanceAfterDelete } from "../../redux/SetBalance/SetBalanceActions";

import styles from "./HomePage.module.css";

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
}

const HomePage: React.FC<HomePageProps> = ({ balance }) => {
  return (
    <>
      <CreditCardData title="balance" value={balance} />
      <Link className={styles.addOperationBtn} to="/add_operation">
        &#10133;
      </Link>
      <AllOperationsList title="Recent operations:" />
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  balance: getBalance(state),
});

export default connect(mapStateToProps)(HomePage);
