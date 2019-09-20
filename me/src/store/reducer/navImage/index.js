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
} from "../../actionType/navImage"
export  function navImageList(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_navList){
        state.navList=payload;
        localStorage.list=JSON.stringify(state.navList)
    }
    return state
}
export function PriorityIn(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_PriorityIn){
        state.PriorityList=payload;
        localStorage.PriorityInList=JSON.stringify(state.PriorityList)
    }
    return state
}
export function HotShow(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_HotShowImage){
        state.HotShow=payload;
        localStorage.HotShowList=JSON.stringify(state.HotShow)
    }
    return state
}
export function CycleOfsinging(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_CycleOfsinging){
        state.tour_show_list=payload;
        localStorage.CycleOfsingingList=JSON.stringify(state.tour_show_list)
    }
    return state
}
export function PriorList(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_prior){
        state.PriorList=payload;
        localStorage.priorAllList=JSON.stringify(state.PriorList)
    }
    return state
}
export function Categories(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_Categories){
        state.Categories=payload;
        localStorage.CategoriesList=JSON.stringify(state.Categories)
    }
    return state
}
export function theatre(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===get_theatre_list){
        state.Categories=payload;
        localStorage.theatre=JSON.stringify(state.Categories)
    }
    return state
}
export function Recommend(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===get_recommend_show_list){
        state.Recommend=payload
    }
    return state

}