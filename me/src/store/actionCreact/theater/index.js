import {
	get_theaterList,
	all_show,
	LIST_SHOWLIST,
	LIU_GAI
} from "../../actionType/theater";

import axios from "axios";

export function get_theater(payload) {
	return {
		type: get_theaterList,
		payload
	}
}
export function get_allshow(payload){
	console.log(payload)
	return {
		type:all_show,
		payload
	}
}
export function liu_ShowList(payload){
	return {
		type:LIST_SHOWLIST,
		payload
	}
}
export function liu123(payload){
	return{
		type:LIU_GAI,
		payload
	}
}
export default {
	  get_theaterList() {
		return async (dispatch) => {
			if(localStorage.theaterList){
				// console.log(111)
			   dispatch(get_theater(JSON.parse(localStorage.theaterList)))
			}else{
				const {
					data
				} = await axios.get("/liu/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2");
				dispatch(get_theater(data.data.theatre_list));		
			   }
		}
		
	},
     
      all_show(page=1){
		return async(dispatch) =>{
		   const {data} = await axios.get(`/tian/Theatre/showListData?tid=2&category=0&page=${page}`);
		  console.log(data)
		   dispatch(get_allshow(data.datas))
		}
	 },	  
      list_ShowList(){
		return async(dispatch)=>{
			const {data} = await axios.get("/bo/Search/getShowCategory?version=6.0.5&referer=2")
			// console.log(data.data.show_category_list)
		    dispatch(liu_ShowList(data.data.show_category_list))
		}
	},
	
	liu_dianji(category_id=0){
		return async(dispatch)=>{
			const {data} = await axios.get(`/tian/Theatre/showListData?tid=2&category=${category_id}&page=1`)
			 dispatch(liu123(data.datas))
			 console.log(data.datas,999999)
		}
	}
}
