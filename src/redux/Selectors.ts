import {operationActionInterface} from "./Operations/operationsActions"

export interface IState {
    balance: number;
    operations: operationActionInterface[]
}

export const getBalance = (state: IState) => state.balance;

export const getAllOperations = (state: IState) => state.operations;

export const getAllSpends = (state: IState) => getAllOperations(state).filter(item => item.operationType === "expense");

export const sumAllSpends = (state: IState) => getAllSpends(state).reduce((acc, item) => acc + item.amount, 0);

export const getAllIncomes = (state: IState) => getAllOperations(state).filter(item => item.operationType === "income");

export const sumAllIncomes = (state: IState) => getAllIncomes(state).reduce((acc, item) => acc + item.amount, 0);



