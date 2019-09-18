import axios from "axios";
export const changeScoresCityList = function (payload) {
    return {
        type:"changeScoresCityList",
        payload
    }
};
export const changeAllScoresList = function (payload) {
    return {
        type:"changeAllScoresList",
        payload
    }
};
export default {
    getScoresCityList(){
       return async (dispatch) => {
           const {data} = await axios.post("/jo/Scores/getScoresCityList")
           console.log(data)
           dispatch(changeScoresCityList(data))
       }
    },
    getAllScoresList() {
        return async (dispatch) => {
            const {data} = await axios.post("/jo/Scores/getAllScoresList");
            console.log(data)
            dispatch(changeAllScoresList(data))
        }
    }
}