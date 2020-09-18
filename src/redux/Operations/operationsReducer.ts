import ActionTypes from "../ActionTypes";
import { operationActionInterface } from "./operationsActions";

interface IOperationsReducer {
  type: string;
  payload: operationActionInterface | string;
}

const operationsReducer = (
  state = [],
  { type, payload }: IOperationsReducer
) => {
  switch (type) {
    case ActionTypes.ADD_OPERATION:
      // payload in this case was operation operation object
      return [payload, ...state];

    case ActionTypes.DELETE_OPERATION:
      // payload in this case was operation Id
      return state.filter(
        (item: operationActionInterface) => item.id !== payload
      );

    default:
      return state;
  }
};

export default operationsReducer;
