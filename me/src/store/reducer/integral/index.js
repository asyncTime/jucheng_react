import initState from "../../state/integral";
import {get_integral_list} from "../../actionType/integral";
export default function (state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === get_integral_list){
        state.integralList = payload.list;
        state.totalRows = payload.totalRows;
    }
    return state;
}