import ActionTypes from "../ActionTypes";
import { operationActionInterface } from "./operationsActions";

// interface IOperationsReducer {
//   type: string;
//   payload: {
//     id: string;
//     operationType: string;
//     amount: number;
//     comments: string;
//     createdAt: number;
//   };
// }

const operationsReducer = (state = [], { type, payload }: any) => {
  switch (type) {
    case ActionTypes.ADD_OPERATION:
      return [payload, ...state];

    case ActionTypes.DELETE_OPERATION:
      return state.filter(
        (item: operationActionInterface) => item.id !== payload
      );

    default:
      return state;
  }
};

export default operationsReducer;
