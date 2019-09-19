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
export default [
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
    },{
        path: '/',
        component: Main,
        title: '',
    }
]