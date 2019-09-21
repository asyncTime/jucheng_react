import {
    combineReducers
}from "redux"
import {
    navImageList,
    Recommends,
    M_Search
} from "./navImage"
import getIntegralList from "./integral"
import {getScoresCityList,getAllScoresList} from "./integral/integralShop"
import {
    showCategoryList,
    showList,
    showCityList,
    cardSliderList,
    cardVipRuleList,
    cardGroupList,
} from "./z-show"
import theaterList from "./theater"
export default combineReducers({
    cardGroupList,
    cardVipRuleList,
    cardSliderList,
    showCityList,
    showList,
    Recommends,
    M_Search,
    showCategoryList,
    navImageList,
    getIntegralList,
    getScoresCityList,
    getAllScoresList,
	theaterList
})

