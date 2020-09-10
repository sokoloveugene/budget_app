import * as React from "react";
import { connect } from "react-redux";
import { BalanceAction } from "../../redux/SetBalance/SetBalanceActions";
import { RouteComponentProps } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import InputNumber from "../../components/InputNumber/InputNumber";
import styles from "./SetBalancePage.module.css";

interface MyProps extends RouteComponentProps<any> {
  setBalance(value: number): void;
}

class SetBalancePage extends React.Component<MyProps> {
  inputRef = React.createRef<HTMLInputElement>();

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      localStorage.setItem("wasHere", JSON.stringify(true));
      const value = this.inputRef.current?.value;
      if (value) {
        this.props.setBalance(Number(value));
      }
      this.props.history.replace("/");
    } catch (err) {
      console.warn(err);
    }
  };

  

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Enter balance</h2>
        <form onSubmit={this.handleSubmit}>
          <InputNumber placeholder="amount" reference={this.inputRef} />
          <SubmitButton title="Save" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: (value: any) => void) => ({
  setBalance: (value: number) => dispatch(BalanceAction(value)),
});

export default connect(null, mapDispatchToProps)(SetBalancePage);
