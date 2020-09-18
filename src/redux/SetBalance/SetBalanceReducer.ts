import ActionTypes from "../ActionTypes";
import { operationTypes } from "../../pages/AddOperationPage/AddOperationPage";

interface balanceReducerAction {
  type: string;
  payload:
    | {
        operationType: string;
        amount: number;
      }
    | number;
}

export const balanceReducer = (state = 0, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SET_BALANCE:
      return payload;

    case ActionTypes.UPDATE_BALANCE_AFTER_DELETE:
      if (payload.operationType === operationTypes.income) {
        return state - payload.amount;
      } else if (payload.operationType === operationTypes.expense) {
        return state + payload.amount;
      } else {
        throw new Error("unexpected operation Type");
      }

    default:
      return state;
  }
};
export default balanceReducer;
