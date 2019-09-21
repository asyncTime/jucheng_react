import axios from "axios";
import {CHANGE_SCORE_LIST,CHANGE_ALL_SCORE_LIST} from "../../../actionType/integral/integralShop";
export const changeScoresCityList = function (payload) {
    return {
        type:CHANGE_SCORE_LIST,
        payload
    }
};
export const changeAllScoresList = function (payload) {
    return {
        type:CHANGE_ALL_SCORE_LIST,
        payload
    }
};
export default {
    getScoresCityList(){
       return async (dispatch) => {
           const {data} = await axios.post("/jo/getScoresCityList")
           dispatch(changeScoresCityList(data))
       }
    },
    getAllScoresList() {
        return async (dispatch) => {
            const {data} = await axios.post("/jo/getAllScoresList");
            dispatch(changeAllScoresList(data))
        }
    }
}