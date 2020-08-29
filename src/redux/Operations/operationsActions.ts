import ActionTypes from "../ActionTypes";

export interface operationActionInterface {
  id: string;
  operationType: string;
  amount: number;
  comments: string;
  createdAt: string;
  category: string;
}

export const operationsAction = (operation: operationActionInterface) => ({
  type: ActionTypes.ADD_OPERATION,
  payload: operation,
});

export const deleteOperation = (id: string) => ({
  type: ActionTypes.DELETE_OPERATION,
  payload: id,
});
