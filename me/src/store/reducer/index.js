import {
    combineReducers
}from "redux"
import {
    navImageList,
    M_Search
} from "./navImage"
import getIntegralList from "./integral"
import {getScoresCityList,getAllScoresList} from "./integral/integralShop"


import {theaterList,
        allShow,
	    listShowliu
		
}from "./theater"

import {navList} from "./Vip";

import {

    showCategoryList,
    showList,
    showCityList,
    cardSliderList,
    cardVipRuleList,
    cardGroupList,
    scheduleInfoList
} from "./z-show"


export default combineReducers({
    scheduleInfoList,
    cardGroupList,
    cardVipRuleList,
    cardSliderList,
    showCityList,
    showList,
    M_Search,
    showCategoryList,
    navImageList,
    getIntegralList,
    getScoresCityList,
    getAllScoresList,
	theaterList,
	allShow,
    navList,
	listShowliu,
	
	// allShow

})

