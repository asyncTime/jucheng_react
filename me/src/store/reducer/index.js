import {
    combineReducers
}from "redux"

import {navImageList,PriorityIn} from "./navImage"
import getIntegralList from "./integral"
import {getScoresCityList,getAllScoresList} from "./integral/integralShop"
import {showCategoryList,showList,showCityList} from "./z-show"
export default combineReducers({
    showCityList,
    showList,
    showCategoryList,
    navImageList,
    PriorityIn,
    getIntegralList,
    getScoresCityList,
    getAllScoresList
})

