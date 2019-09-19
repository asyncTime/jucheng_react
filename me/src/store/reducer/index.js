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
export default combineReducers({
    navImageList,
    PriorityIn,
    HotShow,
    CycleOfsinging,
    getIntegralList,
    getScoresCityList,
    getAllScoresList,

})

