import * as React from "react";
import { Component } from "react";
import {
  IState,
  getIncomesStat,
  getExpensesStat,
  IFormattedStat,
} from "../../redux/Selectors";
import { connect } from "react-redux";
import RadioList from "../RadioList/RadioList";
import { Doughnut } from "react-chartjs-2";

const options: string[] = ["incomes", "expenses"];

interface StatProps {
  incomesToShow: IFormattedStat;
  expensesToShow: IFormattedStat;
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
        
        {dataToShow === options[0] && (
          <Doughnut data={this.props.incomesToShow} />
        )}
        {dataToShow === options[1] && (
          <Doughnut data={this.props.expensesToShow} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  incomesToShow: getIncomesStat(state),
  expensesToShow: getExpensesStat(state),
});

export default connect(mapStateToProps)(Stats);
