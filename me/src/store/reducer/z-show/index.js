import initState from "../../state/z-show";
import {CHANGE_SHOW_CATEGORY_LIST} from "../../actionType/z-show"
import {CHANGE_SHOW_LIST} from "../../actionType/z-show/index";
import {CHANGE_SHOW_CITY_LIST} from "../../actionType/z-show/index";

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