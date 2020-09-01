import ActionTypes from "../ActionTypes";

interface themeAction {
    type: string;
    payload: boolean;
}

export const themeReducer = (state = false, { type, payload }: themeAction) => {
  switch (type) {
    case ActionTypes.CHANGE_THEME:
      return payload;

    default:
      return state;
  }
};
export default themeReducer;