import {get_navList} from "../../actionType/navImage";
import initState from "../../state/navImage"
import {get_PriorityIn} from "../../actionType/navImage"
export  function navImageList(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_navList){
        state.navList=payload;
        localStorage.list=JSON.stringify(state.navList)
    }
    return state
}
export function PriorityIn(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_PriorityIn){
        state.PriorityList=payload;
        localStorage.PriorityInList=JSON.stringify(state.PriorityList)
    }
    return state
}