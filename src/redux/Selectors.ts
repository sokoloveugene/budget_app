import { operationActionInterface } from "./Operations/operationsActions";

export interface IState {
  isDarkTheme: boolean;
  balance: number;
  operations: operationActionInterface[];
}

export const isDarkTheme = (state: IState) => state.isDarkTheme;

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

// FOR STATISTIC

export interface IRowStat {
  [key: string]: number;
}

export interface IFormattedStat {
  labels: string[];
  datasets: [{ data: number[]; backgroundColor: string[] }];
}

const colorsForChart: string[] = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#D98880",
  "#E6B0AA",
  "#DAF7A6",
  "#BB8FCE",
];

export const getIncomesStat = (state: IState):IFormattedStat => {
  const rowData = getAllIncomes(state).reduce((acc, item) => {
    if (acc.hasOwnProperty(item.category)) {
      acc[item.category] += item.amount;
      return acc;
    } else {
      acc[item.category] = item.amount;
      return acc;
    }
  }, {} as IRowStat);

  return {
    labels: Object.keys(rowData),
    datasets: [
      {
        data: Object.values(rowData),
        backgroundColor: colorsForChart,
      },
    ],
  };
};

export const getExpensesStat = (state: IState): IFormattedStat => {
  const rowData = getAllSpends(state).reduce((acc, item) => {
    if (acc.hasOwnProperty(item.category)) {
      acc[item.category] += item.amount;
      return acc;
    } else {
      acc[item.category] = item.amount;
      return acc;
    }
  }, {} as IRowStat);

  return {
    labels: Object.keys(rowData),
    datasets: [
      {
        data: Object.values(rowData),
        backgroundColor: colorsForChart,
      },
    ],
  };
};
