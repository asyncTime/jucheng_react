import {
    combineReducers
}from "redux"
<<<<<<< HEAD
import {navImageList,PriorityIn} from "./navImage"
export default combineReducers({
    navImageList,
    PriorityIn
=======
import navImageList from "./navImage"
import getIntegralList from "./integral"
export default combineReducers({
    navImageList,
    getIntegralList
>>>>>>> 4772083b3846498582e30c27efb2196ff1e54d08
})