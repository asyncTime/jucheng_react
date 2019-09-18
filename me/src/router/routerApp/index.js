import Longin from "../../views/Longin"
import DetailPage from "../../views/Detail page"
import Search from "../../views/Search"
import Main from "../../views/main"
import Vip from "../../views/Vip"
import OrderFrom from "../../views/Order form"
import Show from "../../views/Show"
import Wallet from "../../views/main/Wallet";
import Integral from "../../component/Integral";
import IntegralShop from "../../component/IntegralShop";
import Page from "../../views/main/Page";
import Theater from "../../views/main/Theater";
import Me from "../../views/main/Me";
export default [
    {
        path: '/',
        component: Main,
        title: '',
        Children:[
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
    },
    {
        path:'/Longin',
        component:Longin,
        title:''
    }, {
        path:'/DetailPage',
        component:DetailPage,
        title:''
    }, {
        path:'/Search',
        component:Search,
        title:''
    },{
        path:'/Vip',
        component:Vip,
    },{
        path:'/Order from',
        component:OrderFrom,
    },{
        path:'/Show',
        component:Show
    },{
        path:'/Wallet',
        component:Wallet,
        title:'票夹'
    },{
        path:"/integral",
        component:Integral,
        title:"积分"
    }, {
        path: "/integralShop",
        component: IntegralShop,
        title: "积分商城"
    }
]