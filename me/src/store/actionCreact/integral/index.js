import axios from "axios";
export const changeIntegralList = function(payload){
    return {
        type:"CHANGE_INTEGRAL_LIST",
        payload
    }
};
export default {
    getIntegralList(p=1){
        return async (dispatch) => {
            const {data} = await axios.get("/jo/Myjuooo/ajaxintegral",{
                params:{
                    p
                }
            })
            dispatch(changeIntegralList(data));
            console.log(data)
        }
    }
}