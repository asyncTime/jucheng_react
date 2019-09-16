import React from "react"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
}from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios"
import router from "../router/routerMe";
import {get_nav} from "../store/actionCreact/navImage";
 class Main extends React.Component{
    render() {
        const navImage=this.props.navImageList.bottom_list?this.props.navImageList.bottom_list:[];
        return(
            <div>
                <Router>
                    <Switch>
                    {
                        router.map((v,i)=>{
                            return(
                                    <Route exact  key={v.path} path={v.path} component={v.component}></Route>
                            )
                        })
                    }
                    </Switch>
                    <div id={'m-navImage'}>
                       <NavLink activeStyle={{color:'red'}} exact to={{pathName:'/',state:{list:this.props.navImageList}}} id={"a1"}>
                          <p style={{backgroundImage:"url("+ (navImage[0]?navImage[0].pic:"")+")"}}></p>
                       </NavLink>
                       <NavLink activeStyle={{color:'red'}} exact to={'/main/theater'}>
                            <div>
                               <p className={'m-navImage1'} style={{backgroundImage:"url("+ (navImage[1]?navImage[1].pic:"")+")"}}></p>
                               <span>剧院</span>
                            </div>
                       </NavLink>
                            <a href={"/wallet"}>
                                <div>
                                    <p style={{backgroundImage:"url("+ (navImage[2]?navImage[2].pic:"")+")"}}>
                                    </p>
                                    <span>票夹</span>
                                </div>
                            </a>
                       <NavLink activeStyle={{color:'red'}} exact to={'/main/me'} id={'a3'}>
                           <div>
                              <p style={{background:"url("+ (navImage[3]?navImage[3].pic:"")+")"}}></p>
                              <span>我的</span>
                           </div>
                       </NavLink>
                    </div>
                </Router>
            </div>
        )
    }
    componentDidMount() {
        this.props.get_navImageList()
    }
}
function mapStateToProps(state,props) {
    return{
        navImageList:state.navImageList.navList
    }
}
function mapDispatchToProps(dispatch) {
    return{
        async get_navImageList(){
           const {data}=await axios.get("/ju//home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=1");
         dispatch(dispatch(get_nav(data.data)))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)