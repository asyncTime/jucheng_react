import {
    get_SearchList,
    get_Search_All
} from "../../actionType/navImage";
import axios from "axios"
function get_Search(payload) {
    return{
        type:get_SearchList,
        payload
    }
}
function get_Search_Alls(payload) {
    return{
        type:get_Search_All,
        payload
    }
}
export default {
    get_SearchList_Size(){
        return async (dispatch)=>{
            const data=await axios.get("/ju/Show/Search/getHotWord?version=6.0.5&referer=2")
            dispatch(get_Search((data.data.data)))
        }
},
    get_SearchAll(font){
        console.log(font);
        return async (dispatch)=>{
            const {data}=await axios.get(`/ju/Show/Search/getShowList?keywords=${font}&page=1&sort_type=1&version=6.0.5&referer=2`)
            dispatch(get_Search_Alls((data.data)))
        }
    }
}