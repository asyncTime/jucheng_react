import {
    combineReducers
}from "redux"

import {navImageList,PriorityIn} from "./navImage"
import getIntegralList from "./integral"
export default combineReducers({
    navImageList,
    PriorityIn,
    getIntegralList

})

