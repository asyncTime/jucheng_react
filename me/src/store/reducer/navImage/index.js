import {get_navList} from "../../actionType/navImage";
import initState from "../../state/navImage"
export default function (state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_navList){
        state.navList=payload;
        localStorage.list=JSON.stringify(state.navList)
    }
    return state
}