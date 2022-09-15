export const SET_DARK_THEME = "SET_DARK_THEME"

export const setTheme = (theme) =>(dispatch) => {
    dispatch({
        type: SET_DARK_THEME,
        payload: theme,
    });
}