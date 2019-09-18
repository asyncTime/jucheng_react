import initState from "../../state/navImage"
import {
    get_navList,
    get_PriorityIn,
    get_HotShowImage
} from "../../actionType/navImage"
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
export function HotShow(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));

    if(type===get_HotShowImage){
        state.HotShow=payload;
        console.log(payload)
        localStorage.HotShowList=JSON.stringify(state.HotShow)
    }
    return state
}