const startingState = {
    item : [],
    loading : false,
    error : null,
}


const Result = (state = startingState, action) => {

    switch (action.type) {
        case "REQUEST" :
            return {
                ...state,
                loading : true,
                error : null,
            };

        case "SUCCESS" :
            return {
                ...state,
                loading : true,
                items : action.payload
            };    

        case "UNSUCCESS" :
            return {
                ...state,
                loading : false,
                error : null,
            };
        default :
            return state;    
           
    }
}

export default  Result;