import React, { Component } from "react";
import { connect } from "react-redux";
import { operationsAction } from "../../redux/Operations/operationsActions";
import { BalanceAction } from "../../redux/SetBalance/SetBalanceActions";
import { operationActionInterface } from "../../redux/Operations/operationsActions";
import { IState, getBalance } from "../../redux/Selectors";
import { RouteComponentProps } from "react-router-dom";
import Suggestions from "../../components/Suggestions/Suggestions";
import uid from "uid";
import RadioList from "../../components/RadioList/RadioList";
import InputNumber from "../../components/InputNumber/InputNumber";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import styles from "./AddOperationPage.module.css";
import stylesForInput from "../../components/InputNumber/InputNumber.module.css";

export enum operationTypes {
  income = "income",
  expense = "expense",
}

interface AddOperationProps extends RouteComponentProps {
  addOperation: (value: operationActionInterface) => void;
  setBalance: (value: number) => void;
  currentBalance: number;
}

interface AddOperationState {
  operationType: string;
  amount: string;
  comments: string;
  createdAt: string | null;
  category: string;
}

class AddOperation extends Component<AddOperationProps, AddOperationState> {
  state = {
    operationType: "",
    amount: "",
    comments: "",
    createdAt: null,
    category: "",
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    this.setState((prev) => ({ ...prev, [name]: value }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const currentTime = new Date().toLocaleString();
    const id = uid();
    const { amount, operationType } = this.state;
    const amountToNum = Number(amount);

    this.props.addOperation({
      ...this.state,
      createdAt: currentTime,
      id,
      amount: amountToNum,
    });
    if (operationType === operationTypes.income) {
      this.props.setBalance(this.props.currentBalance + amountToNum);
    } else if (operationType === operationTypes.expense) {
      this.props.setBalance(this.props.currentBalance - amountToNum);
    }

    this.setState({
      operationType: "",
      amount: "",
      comments: "",
      createdAt: null,
    });

    this.props.history.push("/");
  };

  operationTypes = {
    name: "operationType",
    options: [operationTypes.income, operationTypes.expense],
  };

  expenseCategories = {
    name: "category",
    options: [
      "house",
      "education",
      "food",
      "car",
      "clothes",
      "health",
      "other",
    ],
  };

  incomeCategories = {
    name: "category",
    options: ["salary", "bonuses", "gifts", "extra", "dividents"],
  };

  onSuggestionClick = (value: string): void => {
    this.setState((prev) => ({ ...prev, comments: value }));
  };

  render() {
    const { amount, comments, operationType, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <RadioList
          options={this.operationTypes.options}
          name={this.operationTypes.name}
          onChange={this.handleChange}
        />

        <InputNumber
          placeholder="amount"
          onChange={this.handleChange}
          name="amount"
          required
          value={amount}
          step="0.01"
        />

        {operationType === operationTypes.expense && (
          <RadioList
            options={this.expenseCategories.options}
            name={this.expenseCategories.name}
            onChange={this.handleChange}
          />
        )}

        {operationType === operationTypes.income && (
          <RadioList
            options={this.incomeCategories.options}
            name={this.incomeCategories.name}
            onChange={this.handleChange}
          />
        )}

        <input
          placeholder="comments"
          className={stylesForInput.input}
          onChange={this.handleChange}
          value={comments}
          type="text"
          name="comments"
        />

        {category && (
          <Suggestions
            currentComment={comments}
            category={category}
            onClick={this.onSuggestionClick}
          />
        )}

        <SubmitButton title="Add" />
      </form>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  currentBalance: getBalance(state),
});

const mapDispatchToProps = (dispatch: (value: any) => void) => ({
  addOperation: (value: operationActionInterface) =>
    dispatch(operationsAction(value)),
  setBalance: (value: number) => dispatch(BalanceAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOperation);
