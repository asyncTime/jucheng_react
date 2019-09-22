import initState from "../../state/z-show";
import {
    CHANGE_SHOW_CATEGORY_LIST,
    CHANGE_SHOW_LIST,
    CHANGE_SHOW_CITY_LIST,
    CHANGE_CARD_SLIDER_LIST,
    CHANGE_CARD_VIP_RULE_LIST,
    CHANGE_CARD_GROUP_LIST
} from "../../actionType/z-show"

export function showCategoryList (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SHOW_CATEGORY_LIST){
        state.showCategoryList=payload
    }
    return state
}
export function showList(state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if((type===CHANGE_SHOW_LIST)){
        if(payload.page===1){
            state.showList=payload.list
        }else{
            if(payload.list.length===0){
                const arr=[1]
                state.showList=[...state.showList , ...(payload.list),...arr]
            }else {
                state.showList=[...state.showList , ...(payload.list)];
            }
        }
    }


    return state
}
export function showCityList(state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SHOW_CITY_LIST){
        state.showCityList=payload
    }
    return state
}
export function cardSliderList(state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_CARD_SLIDER_LIST){
        state.cardSliderList=payload
    }
    return state
}
export function cardVipRuleList(state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_CARD_VIP_RULE_LIST){
        state.cardVipRuleList=payload
    }
    return state
}
export function cardGroupList(state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_CARD_GROUP_LIST){
        state.cardGroupList=payload
    }
    return state
}
