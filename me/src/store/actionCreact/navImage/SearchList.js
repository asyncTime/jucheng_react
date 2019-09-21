import {
    get_SearchList
} from "../../actionType/navImage";
import axios from "axios"
export function get_Search(payload) {
    return{
        type:get_SearchList,
        payload
    }
}
export default {
    get_SearchList_Size(){
        return async (dispatch)=>{
            const data=await axios.get("/ju/Show/Search/getHotWord?version=6.0.5&referer=2")
            dispatch(dispatch(get_Search((data.data.data))))
        }
}
}