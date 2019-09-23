import React from "react"
import "../assets/mlz/css/showDetal.css"
import list from "../store/actionCreact/z-show"
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from "react-redux"
class ShowDetal extends React.Component{
    render(){
        const allData=this.props.scheduleInfoList.scheduleInfoList?this.props.scheduleInfoList.scheduleInfoList:[];
        console.log(allData)
        const time=allData.item_list?allData.item_list:[];
        console.log(time)
        const staticData=allData.static_data?allData.static_data:[];
        const city=staticData.city?staticData.city:[];//城市位置
        const venue=staticData.venue?staticData.venue:[]//具体位置
        console.log(staticData,"ling")
        return(
            <div className="showDetal">
                <div className="showDetalFirst">
                    <div  className="bgShadow" >
                        <img src={staticData.pic} alt=""/>
                    </div>


                    <div className="titleShadow">

                        <div className="bgShadowIn">
                            <div className="titleTop">
                                <div className="titleTop_left">
                                    <i className="iconfont icon-xiangzuojiantou" onClick={()=>{this.props.history.go(-1)}}></i>
                                </div>
                                <div className="titleTop_center">
                                    演出详情
                                </div>
                                <div className="titleTop_right">
                                    <i className="iconfont icon-icon_share"></i>
                                    &ensp;&ensp;
                                    <i className="iconfont icon-home" onClick={()=>{this.props.history.push("/")}}></i>
                                </div>
                            </div>

                            <div className="titleBody">
                                <div className="titleBody_left">
                                    <img src={staticData.pic} alt=""/>
                                </div>
                                <div className="titleBody_right">
                                    <div>
                                        {staticData.show_name}
                                    </div>
                                    <div>
                                        <span>￥{staticData.price_range}</span>
                                        <a>套</a>
                                    </div>
                                </div>
                            </div>

                        </div>





                    </div>


                    <div className="titleShadowBottom">
                        <div className="titleShadowBottom_left">
                            <div className="titleShadowBottom_left_top">
                                <span>10/19</span><a href="#">周六</a><i className="iconfont icon-arrowright"></i>
                            </div>
                            <div className="titleShadowBottom_left_bottom">
                                <span>  {city.city_name}| </span><a> {venue.venue_name}</a>
                            </div>
                        </div>
                        <div className="titleShadowBottom_right">
                                <i className="iconfont icon-weizhi3"></i>
                        </div>
                    </div>

                </div>


                <div className="showDetalSecond">
                    <div className="positionDown">
                        <div className="positionDown_only">
                            <div className="orange-plus-tips_name">  <span>橙PLUS卡</span>  </div>
                            <div className="orange-plus-tips_desc">开通送￥100 最高省16元</div>
                            <div className="orange-plus-tips_guide"><span>立即开卡</span><i className="iconfont icon-arrowright"></i></div>
                        </div>
                    </div>
                </div>

                <div className="space"></div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getScheduleInfo(this.props.match.params.detalId)
    }
}
function mapStateToProps(state,props) {
    return{
        scheduleInfoList:state.scheduleInfoList,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(list,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowDetal)