import initList from "../../state/Vip"
import {CHANGE_NAV_LIST} from "../../actionType/Vip/";

export const navList = function (state=initList,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === CHANGE_NAV_LIST){
        state.navList = payload;
    }
    return state;
};