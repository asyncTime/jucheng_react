import Longin from "../../views/Longin"
import DetailPage from "../../views/Detail page"
import Search from "../../views/Search"
import main from "../../views/main"
import Vip from "../../views/Vip"
import OrderFrom from "../../views/Order form"
import Show from "../../views/Show"
export default [
    {
        path:'/',
        component:main,
        title:''
    }, {
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
    }
]