
import Longin from "../../views/Longin"
import DetailPage from "../../views/Detail page"
import Search from "../../views/Search"
import Main from "../../views/main"
import Vip from "../../views/Vip"
import OrderFrom from "../../views/Order form"
import Wallet from "../../views/main/Wallet";
import Set from "../../views/Set";

import Coupon from "../../views/Coupon";
import Expired from "../../views/Expired"
import Integral from "../../views/Integral";
import Popular from "../../views/Popular";
import IntegralShop from "../../views/IntegralShop";
import CardBag from "../../views/CardBag";

import allShow from "../../views/allshow";
import CardProduct from "../../views/CardProduct"
import BuyName from "../../views/BuyName"
import Address from "../../views/Address"
import Show from "../../views/Show"
import ShowDetal from "../../views/ShowDetal"
import AddAddress from "../../component/zsl/AddAddress";

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
    },
    {
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
        path: "/Coupon",
        component: Coupon,
        title: "优惠券"
    },
    {
        path:"/Expired",
        component:Expired
    },
    {
        path:"/CardProduct",
        component:CardProduct,

    },
    {
        path:"/ShowDetal/:detalId",
        component:ShowDetal,

    },
    {
        path:'/Show/:id',
        component:Show,

    },
    {
        path: "/cardBag",
        component: CardBag,
        title: "我的卡包"
    },
    {
        path:"/buyName",
        component:BuyName,
        title:"实名购票人"
    },
    {
        path:"/address",
        component:Address,
        title:"收货地址"
    },
    {
        path:"/Popular",
        component:Popular,
        title:"演出"
    },
    {
        path:"/Set",
        component:Set,
        title:"账户设置"
    }
    ,{
        path:"/Popular",
        component:Popular,
        title:"演出"
    },{
        path:"/addaddress",
        component:AddAddress,
        title:"保存地址"
    },{
        path:"/allShow",
        component:allShow,
        title:"suiyou"
    },
    {
        path: '/',
        component: Main,
        title: '',
    }
]