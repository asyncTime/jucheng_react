import initState from "../../state/theater"
import {get_theaterList} from "../../actionType/theater";
export default function theaterList(state=initState,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	if(type===get_theaterList){
		 state.get_theaterList=payload;
		localStorage.theaterList=JSON.stringify(state.get_theaterList)
	}
	return state
}