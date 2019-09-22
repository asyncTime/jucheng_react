import initState from "../../state/navImage"
import {
    get_navList,
    get_PriorityIn,
    get_HotShowImage,
    get_CycleOfsinging,
    get_prior,
    get_Categories,
    get_theatre_list,
    get_recommend_show_list,
    get_SearchList,
    get_Search_All
} from "../../actionType/navImage"
export function navImageList(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===get_navList){
        state.navList=payload;
    }
    if(type===get_PriorityIn){
        state.PriorityList=payload;
    }
    if(type===get_HotShowImage){
        state.HotShow=payload;
    }
    if(type===get_CycleOfsinging){
        state.tour_show_list=payload;
    }
    if(type===get_prior){
        state.PriorList=payload;
    }
    if(type===get_Categories){
        state.Categories=payload;
    }
    if(type===get_theatre_list){
        state.theatre=payload;
    }
    if(type===get_recommend_show_list){
        state.Recommend=[...payload,...state.Recommend]
        state.page++
        console.log(state.page)
    }
    return state
}
export function M_Search(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_SearchList){
        state.Search=payload
    }
    if(type===get_Search_All){
        state.Search_ALL=payload
    }
    return state
}