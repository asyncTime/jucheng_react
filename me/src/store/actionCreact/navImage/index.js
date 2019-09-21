import {
    get_navList,
    get_PriorityIn,
    get_HotShowImage,
    get_CycleOfsinging
} from "../../actionType/navImage";
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
export function get_HotShow(payload) {
    return{
        type:get_HotShowImage,
        payload
    }
}
export function grt_CycleOfsinging(payload) {
    return{
        type:get_CycleOfsinging,
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
         },
    get_HotShowImageList(){
         return async(dispatch)=>{
             if(localStorage.HotShowList){
                
                 dispatch(dispatch(get_HotShow(JSON.parse(localStorage.HotShowList))))
             }else{
                 const {data}=await axios.get("/ju/home/index/getHotsRecommendList?city_id=0&version=6.0.5&referer=1")
                console.log(data.data.hots_show_list)
                 dispatch(dispatch(get_HotShow(data.data.hots_show_list)))
             }
         }
    },
    grt_CycleOfsingingList(){
        return async(dispatch)=>{
            if(localStorage.CycleOfsingingList){
                dispatch(dispatch(grt_CycleOfsinging(JSON.parse(localStorage.CycleOfsingingList))))
            }else{
                const {data}=await axios.get("/ju/home/index/getTourRecommendList?city_id=0&version=6.0.5&referer=2")
                console.log(data.data)
                dispatch(dispatch(grt_CycleOfsinging(data.data.tour_show_list)))
            }
        }
    }
}