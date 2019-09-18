import {
    combineReducers
}from "redux"

import {navImageList,PriorityIn} from "./navImage"
import getIntegralList from "./integral"
import {getScoresCityList,getAllScoresList} from "./integral/integralShop"
export default combineReducers({
    navImageList,
    PriorityIn,
    getIntegralList,
    getScoresCityList,
    getAllScoresList
})

