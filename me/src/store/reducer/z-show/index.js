import initState from "../../state/z-show";
import {
    CHANGE_SHOW_CATEGORY_LIST,
    CHANGE_SHOW_LIST,
    CHANGE_SHOW_CITY_LIST,
    CHANGE_CARD_SLIDER_LIST,
    CHANGE_CARD_VIP_RULE_LIST
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
    if(type===CHANGE_SHOW_LIST){
        state.showList=payload
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
    console.log(state.cardVipRuleList,"2222222222222")
    console.log(payload,"paylod6666")
    if(type===CHANGE_CARD_VIP_RULE_LIST){
        console.log(state.cardVipRuleList,"lalla")
        state.cardVipRuleList=payload
    }
    return state
}