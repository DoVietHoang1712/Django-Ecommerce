const initState = {
    token:null
};

function reducer(state, action){
    if(action.type === "login"){
        state.token = action.payload;
        return state.token;
    }
}

export {initState};
export default reducer;