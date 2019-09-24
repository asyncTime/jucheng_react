import initState from "../../state/theater"
import { //type类型值
	get_theaterList,
	all_show,
	LIST_SHOWLIST,
	LIU_GAI
} from "../../actionType/theater";
export function theaterList(state=initState,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	if (type === get_theaterList) {
		state.theaterList = payload;
		localStorage.theaterList = JSON.stringify(state.theaterList)
	}
	return state
}

export function allShow(state = initState,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	// console.log(4444)
	if (type === all_show) {
		state.all_show.datas = [...payload,...state.all_show.datas]
		if(state.all_show.page>6){
			state.all_show.page=null
			 // state.all_show.page++
		}else{
			state.all_show.page++
		}
		console.log(state.all_show.page,999)
	}
	return state
}
export function listShowliu(state=initState,{type,payload}){
	state = JSON.parse(JSON.stringify(state));
	// console.log(11111111111111111)
	   if(type===LIST_SHOWLIST){
		   state.list1_showlist = payload;
	   }
		if(type===LIU_GAI){
		   state.liu_gaigai=payload;
	   }
	   return state
}
// export function liugai111(state=initState,{type,payload}){
// 	state = JSON.parse(JSON.stringify(state));
// 	 
// }
