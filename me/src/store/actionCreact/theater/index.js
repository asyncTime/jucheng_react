import {
	get_theaterList,
	all_show
} from "../../actionType/theater";

import axios from "axios";

export function get_theater(payload) {
	return {
		type: get_theaterList,
		payload
	}
}
export function get_allshow(payload){
	return {
		type:all_show,
		payload
	}
}
export default {
	get_theaterList() {
		return async (dispatch) => {
			if(localStorage.theaterList){
			   dispatch(get_theater(JSON.parse(localStorage.theaterList)))
			  
			}else{
				const {
					data
				} = await axios.get("/liu/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2");
				dispatch(get_theater(data.data.theatre_list));
				console.log(data.data.theatre_list)
			}
		}
	},
     
	  all_show(){
		return async(dispatch) =>{
			if(localStorage.all_show){
			 dispatch(get_allshow(JSON.parse(localStorage.all_show)))
			}
		else{
			 console.log(4444)
		   const {data} = await axios.get("/tian/Theatre/showListData?tid=2&category=0&page=1");
		   dispatch(get_allshow(data))
		  
		}
		 
       }
	 } 

}
