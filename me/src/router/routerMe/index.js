import Page from "../../views/main/Page";
import Theater from "../../views/main/Theater";
import Me from "../../views/main/Me";
export default [
    {
        path:'/',
        component:Page,
        title:'首页',
        exact:true
    },{
        path:'/Theater',
        component:Theater,
        title:'影院'
    },{
        path:'/Me',
        component:Me,
        title:'我的'
    }
]