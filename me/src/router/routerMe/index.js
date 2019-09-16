import Me from "../../views/main/Me"
import Page from "../../views/main/Page"
import Theater from "../../views/main/Theater"
export default [
    {
        path:'/',
        component:Page,
        title:'首页'
    },{
        path:'/main/Theater',
        component:Theater,
        title:'影院'
    },{
        path:'/main/Me',
        component:Me,
        title:'我的'
    },
]