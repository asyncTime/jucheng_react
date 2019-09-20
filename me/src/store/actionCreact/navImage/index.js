import {
    get_navList,//组合图片，nav,1轮播，卡，类别
    get_PriorityIn,
    get_HotShowImage,
    get_CycleOfsinging,
    get_prior,//折扣
    get_Categories,//类别会
    get_theatre_list,//热门场馆
    get_recommend_show_list,//w为你推荐
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
export function get_priorList(payload) {
    return{
        type:get_prior,
        payload
    }
}
export function get_CategoriesList(payload) {
    return{
        type:get_Categories,
        payload
    }
}
export function get_theatre(payload){
    return{
        type:get_theatre_list,
        payload
    }
}
export function get_recommend_List(payload) {
    return {
        type:get_recommend_show_list,
        payload
    }
}
export default {
    //请求第一轮播图，类别，nav图片
     get_navImageList() {
         return async(dispatch)=>{
             if (localStorage.list) {
                 dispatch(dispatch(get_nav(JSON.parse(localStorage.list))))
             } else {
                 const data = await axios.get("/ju/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=2");
                 dispatch(dispatch(get_nav(data.data.data)))
             }
         }
     },
    get_PriorityIn(){
             return async(dispatch)=>{
                 if (localStorage.PriorityInList) {
                     dispatch(dispatch(get_PriorityInBuy(JSON.parse(localStorage.PriorityInList))))
                 } else {
                     const {data} = await axios.get("/ju/vip/index/getVipHomeSchedular?version=6.0.5&referer=2");
                   console.log(data)
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
                dispatch(dispatch(grt_CycleOfsinging(data.data.tour_show_list)))
            }
        }
    },
    get_priorAll(){
        return async(dispatch)=>{
            if(localStorage.priorAllList){
                dispatch(dispatch(get_priorList(JSON.parse(localStorage.priorAllList))))
            }else{
                const {data}=await axios.get("/ju/vip/index/getVipHomeSchedular?version=6.0.5&referer=2")
               dispatch(dispatch(get_priorList(data.data)))
            }
        }
    },
    get_CategoriesAll(){
        return async(dispatch)=>{
            if(localStorage.CategoriesList){
                dispatch(dispatch(get_CategoriesList(JSON.parse(localStorage.CategoriesList))))
            }else{
                const {data}=await axios.get("/ju/home/index/getFloorShow?city_id=0&version=6.0.5&referer=2")
                dispatch(dispatch(get_CategoriesList(data.data)))
            }
        }
    },
    get_theatre_listAll(){
         return async(dispatch)=>{
             if(localStorage.theatre){
                 dispatch(dispatch(get_theatre(JSON.parse(localStorage.theatre))))
             }else{
                 const {data}=await axios.get("/ju/home/index/getHotTheatre?version=6.0.5&referer=2");
                 dispatch(dispatch(get_theatre(data.data)))
             }
         }
    },
    get_recommend(page=1){
         return async (dispatch)=>{
             console.log(page)
                 const {data}=await axios.get(`/ju/home/index/getRecommendShow?cityAdd=&page=${page}&version=6.0.5&referer=2`);
                console.log("444444444444")
                 dispatch(dispatch(get_recommend_List(data.data.recommend_show_list)))
             }
    }

}