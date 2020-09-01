import ActionTypes from "../ActionTypes";

export const changeTheme  = (isDarkTheme: boolean) => ({
    type : ActionTypes.CHANGE_THEME,
    payload: isDarkTheme
});


