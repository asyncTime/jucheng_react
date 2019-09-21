import {
    combineReducers
}from "redux"
import {
    navImageList,
    M_Search
} from "./navImage"
import getIntegralList from "./integral"
import {getScoresCityList,getAllScoresList} from "./integral/integralShop"


import {theaterList,allShow}from "./theater"


import {
    showCategoryList,
    showList,
    showCityList,
    cardSliderList,
    cardVipRuleList,
    cardGroupList,
} from "./z-show"


export default combineReducers({
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
	allShow
	

})

