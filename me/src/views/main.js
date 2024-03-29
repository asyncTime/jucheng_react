import React from "react"
import {
    Route,
    NavLink,
    Switch
}from "react-router-dom"
import {
    bindActionCreators
} from 'redux';
import {connect} from "react-redux"
import All_List from "../store/actionCreact/navImage";
import router from "../router/routerMe";
 class Main extends React.Component{
     state={
         dataList:[]
     };
     render() {
         const navImage=this.props.navImageList.bottom_list?this.props.navImageList.bottom_list:[];
         return(
             <div>
                 <Switch>
                     {
                         router.map((v,i)=>{
                             return(
                                 <Route {...v} key={i} ></Route>
                             )
                         })
                     }
                 </Switch>
                 <div id={'m-navImage'} onClick={this.changeClor.bind(this)}>
                     <NavLink
                         exact to={{
                         pathname:'/',
                         state:{Page:this.state.dataList}}} id={"a1"}>
                         <p style={{backgroundImage:"url("+ (navImage[0]?navImage[0].pic:"")+")"}} ></p>
                     </NavLink>
                     <NavLink  to={'/Theater'}>
                         <div>
                             <p  className={'m-navImage1'} ref={'name'} style={{backgroundImage:"url("+ (navImage[1]?navImage[1].pic:"")+")"}}></p>
                             <span>剧院</span>
                         </div>
                     </NavLink>
                     <a href={"/wallet"}>
                         <div>
                             <p  style={{backgroundImage:"url("+ (navImage[2]?navImage[2].pic:"")+")"}}>
                             </p>
                             <span>票夹</span>
                         </div>
                     </a>
                     <NavLink  to={'/Me'} id={'a3'}>
                         <div>
                             <p  style={{backgroundImage:"url("+ (navImage[3]?navImage[3].pic:"")+")"}}> </p>
                             <span>我的</span>
                         </div>
                     </NavLink>
                 </div>
             </div>
         )
     }
     componentWillReceiveProps(nextProps, nextContext) {
         if(this.props!==nextProps){
             this.setState({
                 dataList:nextProps.navImageList
             })
         }
     }
    componentDidMount() {
        this.props.get_navImageList();
        this.changeClor()
    }
    changeClor(){
       const num=document.querySelector("#m-navImage").getElementsByTagName('p');
           for(let i=0;i<num.length;i++){
               num[i].onclick=function (e) {
                 i===0?num[0].style.backgroundPositionY='0.84rem':num[0].style.backgroundPositionY='0rem';
                 i===1?num[1].style.backgroundPositionY='0.64rem':num[1].style.backgroundPositionY='0rem';
                 i===3?num[3].style.backgroundPositionY='0.64rem':num[3].style.backgroundPositionY='0rem';
               }
           }
     }
}
function mapStateToProps(state,props) {
    return{
        navImageList:state.navImageList.navList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)