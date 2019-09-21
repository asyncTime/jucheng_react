import initState from "../../state/theater"
import { //type类型值
	get_theaterList,
	all_show
} from "../../actionType/theater";
export function theaterList(state=initState,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	if (type === get_theaterList) {
		state.get_theaterList = payload;
		localStorage.theaterList = JSON.stringify(state.get_theaterList)
	}
	return state
}
// export function theaterList(state = initState,{
// 	type,
// 	payload
// }) {
// 
export function allShow(state = initState,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	if (type === all_show) {
		//console.log(4444444444444,payload)
		state.all_show = payload;
		localStorage.all_show = JSON.stringify(state.all_show)
	}
	return state
}
