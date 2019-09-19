import React from "react";
import {
    bindActionCreators
} from "redux";
import {
    connect
} from "react-redux";
import integralCreator from "../store/actionCreact/integral"
class Integral extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sum:0,
            temp:0
        }
    }
    render(){
        // console.log(this.props.integralList)
        // let temp = 0;
        return (
            < div>
                <div id="header">
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">我的积分</div>
                    <div className="iconfont icon-sandian"></div>
                </div>
                <div id="nav">
                    <div>
                        <div className="rule">
                            <span className="iconfont icon-yijian"></span>
                            积分原则
                        </div>
                        <div className="text">可用积分</div>
                        <div className="num">{this.state.sum}</div>
                        <div className="shop-integral">
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
                                <span style={{display:"none"}}>{this.state.temp += v.scores/1}</span>
                            </div>
                        ))
                    }
                    {console.log(this.state.temp,33333333)}
                </div>
            </div>
        )
    }
   componentWillUpdate(){
       console.log(44444444,this.state.temp)
   
   }
    changeSum(){
        this.setState({
            sum:this.state.temp
        })
        console.log(this.state.sum,111111111)
    }

    componentDidMount(){
        this.props.getIntegralList()
        //this.changeSum()
        console.log(this.state.temp)
    }
}
export default connect(state=>({integralList:state.getIntegralList.integralList}),dispatch=>bindActionCreators(integralCreator,dispatch))(Integral)