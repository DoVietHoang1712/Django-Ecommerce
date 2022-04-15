const reducer = (state, action) => {
    switch(action.type){
        case "login":
            console.log(action.payload.username)
            // let data;
            // fetch("http://127.0.0.1:8000/auth/token/login/",
            // {
            //     method: 'POST',
            //     headers: [],
            //     body: {
            //       mode: 'urlencoded',
            //       urlencoded: [
            //         {
            //           key: 'username',
            //           value: action.payload.username,
            //           type: 'text',
            //         },
            //         {
            //           key: 'password',
            //           value: action.payload.password,
            //           type: 'text',
            //         },
            //       ],
            //     },
            //   }
            // ).then(res => res.json()).then(data =>{
            //     console.log(data);
            //     data = data.token;
            // })
            // return data;
            return state;

        case "register":

        default:
            throw new Error('Invalid action!');
    }
}
export default reducer;