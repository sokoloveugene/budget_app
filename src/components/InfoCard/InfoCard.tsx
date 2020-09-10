import * as React from "react";
import { connect } from "react-redux";
import { sumAllSpends, sumAllIncomes, IState } from "../../redux/Selectors";
import styles from "./InfoCard.module.css";

interface IInfoCard {
  sumData: number;
  title: string;
}

const InfoCard: React.FC<IInfoCard> = ({ title, sumData }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.amount}>{sumData} &#8372;</p>
    </div>
  );
};

const mapStateToPropsIncomes = (state: IState) => ({
  sumData: sumAllIncomes(state),
  title: "total incomes:",
});

const mapStateToPropsExpenses = (state: IState) => ({
  sumData: sumAllSpends(state),
  title: "total spend:",
});

export const IncomesInfoCard = connect(mapStateToPropsIncomes)(InfoCard);
export const ExpensesInfoCard = connect(mapStateToPropsExpenses)(InfoCard);
