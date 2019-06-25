const userReducer = (state =  {
    name : "John",
    age : 27
}, action) => {
    
    switch (action.type){
        
        case "SET_NAME":
            state = {
                ...state,
                name :  action.payload
            };
            console.log(action.payload);
            break;
        case "SET_AGE":
                state = {
                    ...state,
                    age :  action.payload
                };
                
            break;
    }

    return state;

};

export default userReducer;