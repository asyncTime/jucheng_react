import {get_navList} from "../../actionType/navImage";
import {get_PriorityIn} from "../../actionType/navImage"
import axios from "axios"
export function get_nav(payload) {
    return{
        type:get_navList,
        payload
    }
}
export function get_PriorityInBuy(payload) {
    return{
        type:get_PriorityIn,
        payload
    }
}
export default {
     get_navImageList() {
         return async(dispatch)=>{
             if (localStorage.list) {
                 dispatch(dispatch(get_nav(JSON.parse(localStorage.list))))
             } else {
                 const {data} = await axios.get("/ju//home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=1");
                 dispatch(dispatch(get_nav(data.data)))
             }
         }
     },
    get_PriorityIn(){
             return async(dispatch)=>{
                 if (localStorage.PriorityInList) {
                     dispatch(dispatch(get_PriorityInBuy(JSON.parse(localStorage.PriorityInList))))
                 } else {
                     const {data} = await axios.get("/ju/vip/index/getVipHomeSchedular?version=6.0.5&referer=2");

                    console.log(data);
                     dispatch(dispatch(get_PriorityInBuy(data.data)))
                 }
             }
         }
}