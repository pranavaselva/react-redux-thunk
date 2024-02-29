import axios from "axios"

const Fetch = () => async (dispatch) => {
    dispatch({ type : "REQUEST"});

    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");

        dispatch({ type : "SUCCESS", payload : res.data })
    } 

    catch(error){
        dispatch({ type : "UNSUCCESS", error });
    }
};

export default Fetch;