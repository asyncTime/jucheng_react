import axios from "axios";
export const changeScoresCityList = function (payload) {
    return {
        type:"changeScoresCityList",
        payload
    }
}
export const changeAllScoresList = function (payload) {
    return {
        type:"changeAllScoresList",
        payload
    }
}
export default {
    getScoresCityList(){
        console.log("111")
       return async (dispatch) => {
           const {data} = await axios.post("/ju/Myjuooo/ajaxintegral?p=1")
           console.log(data)
           dispatch(changeScoresCityList(data))
       }
    },
    getAllScoresList() {
        return async (dispatch) => {
            const {data} = await axios.post("/ju/Scores/getAllScoresList");
            console.log(data)
            dispatch(changeAllScoresList(data))
        }
    }
}