import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SetBalancePage from "./pages/SetBalancePage/SetBalancePage";
import { RouteComponentProps } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddOperation from "./pages/AddOperationPage/AddOperationPage";
import ShowIncomesListPage from "./pages/ShowIncomesListPage/ShowIncomesListPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ShowExpensesListPage from "./pages/ShowExpenseListPage/ShowExpenseListPage";
import Stats from "./components/Stats/Stats";
import sprite from "./svgSprite.svg";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { isDarkTheme, IState } from "./redux/Selectors";

interface MyProps extends RouteComponentProps {
  balance: number;
  isDark: boolean;
}

interface MyState {}

class App extends Component<MyProps, MyState> {
  componentDidMount() {
    this.handleChangeTheme()
    try {
      const wasHere = localStorage.getItem("wasHere");
      if (!wasHere) {
        this.props.history.replace("/change_balance");
      }
    } catch (err) {
      console.warn(err);
    }
  }
  
  componentDidUpdate() {
    this.handleChangeTheme()
  }

  body = document.body;

  handleChangeTheme = ():void => {
    if (this.props.isDark) {
      this.body.style.backgroundColor = "black";
      this.body.style.color = "white";
    } else {
      this.body.style.backgroundColor = "white";
      this.body.style.color = "#2D2C2C";
    }
  }



  render() {
    return (
      <div>
        <header className={styles.header}>
          <Link className={styles.svgContainer} to="/menu">
            <svg className={styles.svgMenu}>
              <use href={`${sprite}#menu`} />
            </svg>
          </Link>

          <Link className={styles.svgContainer} to="/">
            <svg className={styles.svgMenu}>
              <use href={`${sprite}#userLogo`} />
            </svg>
          </Link>
        </header>

        <Route exact path="/" component={HomePage} />
        <Route path="/change_balance" component={SetBalancePage} />
        <Route path="/add_operation" component={AddOperation} />
        <Route
          path="/all_incomes"
          render={(props) => (
            <ShowIncomesListPage {...props} title="All incomes:" />
          )}
        />
        <Route
          path="/all_expenses"
          render={(props) => (
            <ShowExpensesListPage {...props} title="All expenses:" />
          )}
        />
        <Route path="/menu" component={MenuPage} />
        <Route path="/stats" component={Stats} />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  isDark: isDarkTheme(state),
});

export default connect(mapStateToProps)(App);
