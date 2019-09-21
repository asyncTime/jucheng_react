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
export  function navImageList(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_navList){
        state.navList=payload;
        localStorage.list=JSON.stringify(state.navList)
    }

    return state
}
export function PriorityIn(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));

    if(type===get_PriorityIn){
        state.PriorityList=payload;
        localStorage.PriorityInList=JSON.stringify(state.PriorityList)
    }
    if(type===get_HotShowImage){
        state.HotShow=payload;
        localStorage.HotShowList=JSON.stringify(state.HotShow)
    }
    if(type===get_CycleOfsinging){
        state.tour_show_list=payload;
        localStorage.CycleOfsingingList=JSON.stringify(state.tour_show_list)
    }
    if(type===get_prior){
        state.PriorList=payload;
        localStorage.priorAllList=JSON.stringify(state.PriorList)
    }
    if(type===get_Categories){
        state.Categories=payload;
        localStorage.CategoriesList=JSON.stringify(state.Categories)
    }
    if(type===get_theatre_list){
        state.theatre=payload;
        localStorage.theatre=JSON.stringify(state.theatre)
    }
    return state
}
export function Recommends(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_recommend_show_list){
        state.Recommend=[...payload,...state.Recommend]
        state.page++
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