import ActionTypes from "../ActionTypes";

// interface balanceReducerAction {
//     type: string;
//     payload: {
//         balance: number
//     }
// }

import { operationTypes } from "../../pages/AddOperationPage/AddOperationPage";

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
