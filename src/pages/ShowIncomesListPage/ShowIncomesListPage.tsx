import * as React from "react";
import OperationsList from "../../components/OperationsList/OperationsList";
import { getAllIncomes, IState } from "../../redux/Selectors";
import { deleteOperation } from "../../redux/Operations/operationsActions";
import { updateBalanceAfterDelete } from "../../redux/SetBalance/SetBalanceActions";
import {IncomesInfoCard} from "../../components/InfoCard/InfoCard";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => ({
  operations: getAllIncomes(state),
});

const mapDispatchToProps = (dispatch: (value: any) => void) => ({
  onDelete: (id: string) => dispatch(deleteOperation(id)),
  updateBalanceAfterDelete: (operationType: string, amount: number) =>
    dispatch(updateBalanceAfterDelete(operationType, amount)),
});

const IncomeOperationsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationsList);

interface ShowIncomesListPageProps {
  title?: string;
}

const ShowIncomesListPage: React.FC<ShowIncomesListPageProps> = ({title}) => (
<>
<IncomesInfoCard />
<IncomeOperationsList title={title} />
</>
);
export default ShowIncomesListPage;
