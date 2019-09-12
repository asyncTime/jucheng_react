import Me from "../../views/main/Me"
import Page from "../../views/main/Page"
import Theater from "../../views/main/Theater"
import Wallet from "../../views/main/Wallet"
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
        path:'/main/Wallet',
        component:Wallet,
        title:'票夹'
    },{
        path:'/main/Me',
        component:Me,
        title:'我的'
    },
]