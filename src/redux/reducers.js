import { SET_DARK_THEME } from "./actions";

const initialState = {
    theme: "light",
}

const themeReducer = ( state = initialState, actions ) =>  {
    switch(actions.type) {
        case SET_DARK_THEME:
            return { ...state, theme: actions.payload };
            
        default:
            return state;
    }
}

export default themeReducer;
