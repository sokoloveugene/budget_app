import ActionTypes from "../ActionTypes";
import { operationActionInterface } from "./../Operations/operationsActions";
import { ISuggestions } from "../Selectors";

interface SuggestionReducer {
  type: string;
  payload: operationActionInterface | IDeleteSuggestion;
}

interface IDeleteSuggestion {
  category: string;
  value: string;
}

const suggestionReducer = (
  state: ISuggestions = {},
  { type, payload }: SuggestionReducer
) => {
  switch (type) {
    case ActionTypes.ADD_OPERATION:
      if ((payload as operationActionInterface).comments.trim()) {
        const { category } = payload;
        const comment = (payload as operationActionInterface).comments
          .trim()
          .toLocaleLowerCase();
        const formattedComment =
          comment.charAt(0).toUpperCase() + comment.slice(1);

        if (state.hasOwnProperty(category)) {
          if (state[category].includes(formattedComment)) {
            return state;
          } else {
            return {
              ...state,
              [category]: [formattedComment, ...state[category]],
            };
          }
        } else {
          return { ...state, [category]: [formattedComment] };
        }
      }
      return state;

    case ActionTypes.DELETE_SUGGESTION:
      return {
        ...state,
        [payload.category]: [...state[payload.category]].filter(
          (item) => item !== (payload as IDeleteSuggestion).value
        ),
      };

    default:
      return state;
  }
};

export default suggestionReducer;
