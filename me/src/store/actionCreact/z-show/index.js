import {
    CHANGE_SHOW_CATEGORY_LIST,
    CHANGE_SHOW_LIST,
    CHANGE_SHOW_CITY_LIST,
    CHANGE_CARD_SLIDER_LIST,
    CHANGE_CARD_VIP_RULE_LIST,
    CHANGE_CARD_GROUP_LIST,
    CHANGE_SCHEDULE_INFO_LIST
} from "../../actionType/z-show"

import axios from "axios"
export function getShowCategoryList(payload) {
    return{
        type:CHANGE_SHOW_CATEGORY_LIST,
        payload
    }
}
export function getShowList(payload) {
    return{
        type:CHANGE_SHOW_LIST,
        payload
    }
}
export function getShowCityList(payload) {
    return{
        type:CHANGE_SHOW_CITY_LIST,
        payload
    }
}
export function getCardSilderList(payload) {
    return{
        type:CHANGE_CARD_SLIDER_LIST,
        payload
    }
}
export function getCardVipRuleList(payload) {
    return{
        type:CHANGE_CARD_VIP_RULE_LIST,
        payload
    }
}
export function getCardGroupList(payload) {
    return{
        type:CHANGE_CARD_GROUP_LIST,
        payload
    }
}

export function getScheduleInfo(payload) {
    return{
        type:CHANGE_SCHEDULE_INFO_LIST,
        payload
    }
}
export default {
    getShowCategoryList() {
        return async(dispatch)=>{
                const {data} = await axios.get("/meng/Search/getShowCategory?version=6.0.5&referer=2");
                const showCategoryList=data.data
            dispatch(getShowCategoryList(showCategoryList))
        }
    },
    getShowList({id=0,cityId=0,page=1}){
        return async(dispatch)=>{
                const {data} = await axios.get(`/ju/Show/Search/getShowList?category=${id}&city_id=${cityId}&page=${page}&keywords=&version=6.0.5&referer=2`);
                const showList=data.data;
                    dispatch(getShowList(showList))
            }
    },
    getShowCityList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/meng/Search/getCity?version=6.0.5&referer=2");
            const showCityList=data.data;
            dispatch(getShowCityList(showCityList))
        }
    },
    getCardSliderList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/ju/Card/index/hotBanner?version=6.0.5&referer=2");
            const cardSilderList=data.data;
            dispatch(getCardSilderList(cardSilderList))
        }
    },
    getCardVipRuleList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/ju/vip/index/getVipRule?version=6.0.5&referer=2");
            const cardVipRuleList=data.data.vip_rule_data.equity_list;
            dispatch(getCardVipRuleList(cardVipRuleList))
        }
    },
    getCardGroupList(){

        return async (dispatch)=>{
            const {data} = await axios.get("/ju/Card/index/getCardGroupList?version=6.0.5&referer=2");
            const cardGroupList=data.data;
            dispatch(getCardGroupList(cardGroupList))
        }
    },
    getScheduleInfo(schedular_id){
        return async (dispatch)=>{
            const {data} = await axios.get(`/ju/Schedule/Schedule/getScheduleInfo?schedular_id=${schedular_id}&version=6.0.5&referer=2`);
            const scheduleInfo=data.data;
            dispatch(getScheduleInfo(scheduleInfo))
        }
    }
}