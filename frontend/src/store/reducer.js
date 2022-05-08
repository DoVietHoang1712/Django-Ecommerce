import { SET_TOKEN } from "./constants";
// import * as actions from "./actions";
const initState = {
    token: localStorage.token
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            throw new Error("Invalid action")
    }
}

export { initState };
export default reducer;