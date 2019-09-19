import {
    combineReducers
}from "redux"

import {
    navImageList,
    PriorityIn,
    HotShow,
    CycleOfsinging
} from "./navImage"
import getIntegralList from "./integral"
import {getScoresCityList,getAllScoresList} from "./integral/integralShop"
import {
    showCategoryList,
    showList,
    showCityList,
    cardSliderList,
    cardVipRuleList
} from "./z-show"
export default combineReducers({
    cardVipRuleList,
    cardSliderList,
    showCityList,
    showList,
    showCategoryList,
    navImageList,
    PriorityIn,
    HotShow,
    CycleOfsinging,
    getIntegralList,
    getScoresCityList,
    getAllScoresList,

})

