import axios from "axios"
import {CHANGE_NAV_LIST} from "../../actionType/Vip";

export function navList(payload) {
    return {
        type:CHANGE_NAV_LIST,
        payload
    }
}
export default {
    getNavList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/x/vip/index/getVipRule?version=6.0.5&referer=2");
            console.log(data,11111111111);
            dispatch(navList(data));
        }
    }
}