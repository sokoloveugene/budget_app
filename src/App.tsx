import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SetBalancePage from "./pages/SetBalancePage/SetBalancePage";
import { RouteComponentProps } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddOperation from "./pages/AddOperationPage/AddOperationPage";
import ShowIncomesListPage from "./pages/ShowIncomesListPage/ShowIncomesListPage";

import ShowExpensesListPage from "./pages/ShowExpenseListPage/ShowExpenseListPage";

interface MyProps extends RouteComponentProps {
  balance: number;
}
interface MyState {}

class App extends Component<MyProps, MyState> {
  componentDidMount() {
    try {
      const wasHere = localStorage.getItem("wasHere");
      if (!wasHere) {
        this.props.history.replace("/change_balance");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <div>
        <Link to="/">home</Link>

        <Route exact path="/" component={HomePage} />
        <Route path="/change_balance" component={SetBalancePage} />
        <Route path="/add_operation" component={AddOperation} />
        <Route path="/all_incomes" component={ShowIncomesListPage} />
        <Route path="/all_expenses" component={ShowExpensesListPage} />
      </div>
    );
  }
}

export default App;
