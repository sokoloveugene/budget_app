import * as React from "react";
import { Component } from "react";
import {
  IState,
  getIncomesStat,
  getExpensesStat,
  IGetStat,
} from "../../redux/Selectors";
import { connect } from "react-redux";
import RadioList from "../RadioList/RadioList";
import styles from "./Stats.module.css";

const options = ["incomes", "expenses"];

interface StatProps {
  incomesToShow: IGetStat;
  expensesToShow: IGetStat;
  title: string;
}

interface StatsState {
  dataToShow: null | string;
}

class Stats extends Component<StatProps, StatsState> {
  state = {
    dataToShow: null,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dataToShow: e.target.value });
  };

  render() {
    const { dataToShow } = this.state;
    return (
      <>
        <RadioList
          options={options}
          name="operationType"
          onChange={this.handleChange}
        />
        <h3>{this.props.title}</h3>

        <ul className={styles.itemsContainer}>
          {dataToShow === options[0] &&
            Object.keys(this.props.incomesToShow).map((key) => (
              <li className={styles.item} key={key}>
                {key}: {this.props.incomesToShow[key]}
              </li>
            ))}
          {dataToShow === options[1] &&
            Object.keys(this.props.expensesToShow).map((key) => (
              <li className={styles.item} key={key}>
                {key}: {this.props.expensesToShow[key]}
              </li>
            ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  incomesToShow: getIncomesStat(state),
  expensesToShow: getExpensesStat(state),
});

export default connect(mapStateToProps)(Stats);
