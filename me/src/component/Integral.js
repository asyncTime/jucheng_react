import React from "react";
import {
    bindActionCreators
} from "redux";
import {
    connect
} from "react-redux";
import integralCreator from "../store/actionCreact/integral"
class Integral extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <div className="left">
                        <span></span>
                    </div>
                    <div className="center">我的积分</div>
                    <div className="iconfont icon-sandian"></div>
                </header>
                <nav>
                    <div>
                        <div className="rule">
                            <span className="iconfont icon-yijian"></span>
                            积分原则
                        </div>
                        <div className="text">可用积分</div>
                        <div className="num">10</div>
                        <div className="shop-integral">
                            <span className="iconfont icon-yemian-copy-copy"></span>
                            积分商城
                        </div>
                    </div>
                </nav>
                <section>
                    <div className="little">积分明细</div>
                </section>
                <article>
                    <div className="item-integral">
                        <div className="name">每日登录</div>
                        <div className="time">2019.09.15 13:20:01</div>
                        <span className="addNum">+2</span>
                    </div><div className="item-integral">
                        <div className="name">每日登录</div>
                        <div className="time">2019.09.15 13:20:01</div>
                        <span className="addNum">+2</span>
                    </div><div className="item-integral">
                        <div className="name">每日登录</div>
                        <div className="time">2019.09.15 13:20:01</div>
                        <span className="addNum">+2</span>
                    </div><div className="item-integral">
                        <div className="name">每日登录</div>
                        <div className="time">2019.09.15 13:20:01</div>
                        <span className="addNum">+2</span>
                    </div><div className="item-integral">
                        <div className="name">每日登录</div>
                        <div className="time">2019.09.15 13:20:01</div>
                        <span className="addNum">+2</span>
                    </div><div className="item-integral">
                        <div className="name">每日登录</div>
                        <div className="time">2019.09.15 13:20:01</div>
                        <span className="addNum">+2</span>
                    </div>
                </article>
            </div>
        )
    }
    componentDidMount(){
        this.props.getIntegralList()
    }
}
export default connect(state=>({integralList:state.getIntegralList.integralList}),dispatch=>bindActionCreators(integralCreator,dispatch))(Integral)