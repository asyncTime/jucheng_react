import axios from "axios";
import{get_integral_list} from "../../actionType/integral"
export const changeIntegralList = function(payload){
    return {
        type:get_integral_list,
        payload
    }
};
export default {
    getIntegralList(){
        return async (dispatch) => {
            // https://m.juooo.com/Myjuooo/ajaxintegral?p=1
            const {data} = await axios.get("/jo/integral");
            dispatch(changeIntegralList(data));
        }
    }
}