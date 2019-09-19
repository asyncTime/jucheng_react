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
import {showCategoryList,showList,showCityList} from "./z-show"
import theaterList from "./theater"
export default combineReducers({
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
	theaterList

})

