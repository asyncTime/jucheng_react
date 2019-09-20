import initState from "../../../state/integral/integralShop";
import {CHANGE_SCORE_LIST,CHANGE_ALL_SCORE_LIST} from "../../../actionType/integral/integralShop";
export  const getScoresCityList = function (state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === CHANGE_SCORE_LIST){
        state.scoresCityList = payload;
    }
    return state;
}
export const getAllScoresList = function (state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === CHANGE_ALL_SCORE_LIST){
        state.AllScoresList = payload;
    }
    return state;
}