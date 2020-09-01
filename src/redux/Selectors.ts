import { operationActionInterface } from "./Operations/operationsActions";

export interface IState {
  isDarkTheme: boolean;
  balance: number;
  operations: operationActionInterface[];
}

export const getBalance = (state: IState) => state.balance;

export const getAllOperations = (state: IState) => state.operations;

export const getAllSpends = (state: IState) =>
  getAllOperations(state).filter((item) => item.operationType === "expense");

export const sumAllSpends = (state: IState) =>
  getAllSpends(state).reduce((acc, item) => acc + item.amount, 0);

export const getAllIncomes = (state: IState) =>
  getAllOperations(state).filter((item) => item.operationType === "income");

export const sumAllIncomes = (state: IState) =>
  getAllIncomes(state).reduce((acc, item) => acc + item.amount, 0);

export interface IGetStat {
  [key: string]: number;
}

export const getIncomesStat = (state: IState) =>
  getAllIncomes(state).reduce((acc, item) => {
    if (acc.hasOwnProperty(item.category)) {
      acc[item.category] += item.amount;
      return acc;
    } else {
      acc[item.category] = item.amount;
      return acc;
    }
  }, {} as IGetStat);

  export const getExpensesStat = (state: IState) =>
  getAllSpends(state).reduce((acc, item) => {
    if (acc.hasOwnProperty(item.category)) {
      acc[item.category] += item.amount;
      return acc;
    } else {
      acc[item.category] = item.amount;
      return acc;
    }
  }, {} as IGetStat);


export const isDarkTheme = (state: IState) => state.isDarkTheme;