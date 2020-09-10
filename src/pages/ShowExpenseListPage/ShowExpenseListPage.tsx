import * as React from "react";
import OperationsList from "../../components/OperationsList/OperationsList";
import { getAllSpends, IState } from "../../redux/Selectors";
import { deleteOperation } from "../../redux/Operations/operationsActions";
import { updateBalanceAfterDelete } from "../../redux/SetBalance/SetBalanceActions";
import { ExpensesInfoCard } from "../../components/InfoCard/InfoCard";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => ({
  operations: getAllSpends(state),
});

const mapDispatchToProps = (dispatch: (value: any) => void) => ({
  onDelete: (id: string) => dispatch(deleteOperation(id)),
  updateBalanceAfterDelete: (operationType: string, amount: number) =>
    dispatch(updateBalanceAfterDelete(operationType, amount)),
});

const ExpenseOperationsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationsList);

interface ShowExpensesListPageProps {
  title?: string;
}

const ShowExpensesListPage: React.FC<ShowExpensesListPageProps> = ({
  title,
}) => (
  <>
    <ExpensesInfoCard />
    <ExpenseOperationsList title={title} />
  </>
);

export default ShowExpensesListPage;
