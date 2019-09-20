import {get_theaterList} from "../../actionType/theater";
import axios from "axios";

export function get_theater(payload) {
    return{
        type:get_theaterList,
        payload
    }
}
export default{
	get_theaterList(){
	
		return async(dispatch)=>{
			
			const {data} = await axios.get("/liu/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2");
		
			
			dispatch(get_theater(data.data.theatre_list));
				
		}
	}
	
	
}