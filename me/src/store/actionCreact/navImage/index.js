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
function get_nav(payload) {
    return{
        type:get_navList,
        payload
    }
}
function get_PriorityInBuy(payload) {
    return{
        type:get_PriorityIn,
        payload
    }
}
function get_HotShow(payload) {
    return{
        type:get_HotShowImage,
        payload
    }
}
function grt_CycleOfsinging(payload) {
    return{
        type:get_CycleOfsinging,
        payload
    }
}
function get_priorList(payload) {
    return{
        type:get_prior,
        payload
    }
}
function get_CategoriesList(payload) {
    return{
        type:get_Categories,
        payload
    }
}
function get_theatre(payload){
    return{
        type:get_theatre_list,
        payload
    }
}
function get_recommend_List(payload) {
    return {
        type:get_recommend_show_list,
        payload
    }
}
export default {
    //请求第一轮播图，类别，nav图片
    get_navImageList() {
        return async(dispatch)=>{
            const data = await axios.get("/ju/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=2");
            dispatch(get_nav(data.data.data))
        }
    },
    //vip 转享折扣
    get_PriorityIn(){
        return async(dispatch)=>{

            const {data} = await axios.get("/ju/vip/index/getVipHomeSchedular?version=6.0.5&referer=2");

            dispatch(get_PriorityInBuy(data.data))
        }
    },
    get_HotShowImageList(){
        return async(dispatch)=>{
            const {data}=await axios.get("/ju/home/index/getHotsRecommendList?city_id=0&version=6.0.5&referer=1")
            dispatch(get_HotShow(data.data.hots_show_list))
        }
    },
    grt_CycleOfsingingList(){
        return async(dispatch)=>{
            const {data}=await axios.get("/ju/home/index/getTourRecommendList?city_id=0&version=6.0.5&referer=2")
            dispatch(grt_CycleOfsinging(data.data.tour_show_list))
        }
    },
    get_priorAll(){
        return async(dispatch)=>{
            const {data}=await axios.get("/ju/vip/index/getVipHomeSchedular?version=6.0.5&referer=2")
            dispatch(get_priorList(data.data))
        }
    },
    get_CategoriesAll(){
        return async(dispatch)=>{
            const {data}=await axios.get("/ju/home/index/getFloorShow?city_id=0&version=6.0.5&referer=2")
            dispatch(get_CategoriesList(data.data))
        }
    },
    get_theatre_listAll(){
        return async(dispatch)=>{
            const {data}=await axios.get("/ju/home/index/getHotTheatre?version=6.0.5&referer=2");
            dispatch(get_theatre(data.data))
        }
    },
    get_recommend(page=1){
        return async (dispatch)=>{
            const {data}=await axios.get(`/ju/home/index/getRecommendShow?cityAdd=&page=${page}&version=6.0.5&referer=2`);
            dispatch(get_recommend_List(data.data.recommend_show_list))
        }
    }

}