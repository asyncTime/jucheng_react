import {
    combineReducers
}from "redux"

import {
    navImageList,
    PriorityIn,
    HotShow,
    CycleOfsinging,
    PriorList,
    Categories,
    theatre
} from "./navImage"
import getIntegralList from "./integral"
import {getScoresCityList,getAllScoresList} from "./integral/integralShop"
import {showCategoryList,showList,showCityList} from "./z-show"
export default combineReducers({
    showCityList,
    showList,
    Categories,
    showCategoryList,
    navImageList,
    PriorityIn,
    HotShow,
    theatre,
    CycleOfsinging,
    PriorList,
    getIntegralList,
    getScoresCityList,
    getAllScoresList,

})

