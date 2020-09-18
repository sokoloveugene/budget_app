import ActionTypes from "../ActionTypes";

export const SuggestionDeleteAction = (category: string, value: string) => ({
  type: ActionTypes.DELETE_SUGGESTION,
  payload: {
    category,
    value,
  },
});
