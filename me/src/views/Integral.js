import React from "react";
import {
    bindActionCreators
} from "redux";
import {
    connect
} from "react-redux";
import Bubble from "../component/zsl/Bubble"
import integralCreator from "../store/actionCreact/integral"
class Integral extends React.Component{
    render(){
        // console.log(this.props.integralList)
        return (
            < div>
                <div id="header">
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">我的积分</div>
                    <div className="iconfont icon-sandian">
                        
                    </div>
                </div>
                <div id="nav">
                    <div>
                        <div className="rule">
                            <span className="iconfont icon-yijian"></span>
                            积分原则
                        </div>
                        <div className="text">可用积分</div>
                        <div className="num">{this.props.totalRows * 2}</div>
                        <div className="shop-integral" onClick={()=>{
                            this.props.history.push({
                                pathname:"/integralShop",
                                state:{
                                    scoreNew:this.props.totalRows * 2
                                }
                            })
                        }}>
                            <span className="iconfont icon-yemian-copy-copy"></span>
                            积分商城
                        </div>
                    </div>
                </div>
                <div id="section">
                    <div className="little">积分明细</div>
                </div>
                <div id="article">
                    {
                        this.props.integralList.map((v,i) => (
                            <div className="item-integral" key={i} >
                                <div className="name">{v.reason}</div>
                                <div className="time">{v.createtime}</div>
                                <span className="addNum" >{`+${v.scores}`}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getIntegralList();
    }
}
function mapToProps(state){
    return {
        integralList:state.getIntegralList.integralList,
        totalRows:state.getIntegralList.totalRows
    }
}
export default connect(mapToProps,dispatch=>bindActionCreators(integralCreator,dispatch))(Integral)