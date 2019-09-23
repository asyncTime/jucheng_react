import React from "react";
import {
    NavLink
} from "react-router-dom"
import ActionSheet from "../component/zsl/ActionSheet";
class CardBag extends React.Component{
    render(){
        return (
            <div>
                <div id="zsl-header">
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">我的卡包</div>
                    <div className="right">
                        <span className="iconfont icon-sandian"></span>
                    </div>
                </div>
                <div id="zsl-section-cardBag">
                    <div className="img">
                        <img src={require("../assets/zsl/img/rAoKNVyumKiAfP1qAAACYTizNOw440.png")} alt="暂无信用卡"/>
                        暂无信用卡
                    </div>
                </div>
                <div id="zsl-footer">
                    <div className="buynewcard">
                        <NavLink to={"/CardProduct"}>购买新卡</NavLink>
                    </div>
                    <div className="tree"></div>
                    {/*<div className="bind-newcard">绑定新卡</div>*/}
                    <ActionSheet></ActionSheet>
                    <div className="tree"></div>
                    <div className="my-newcard">我的卡包</div>
                </div>
            </div>
        )
    }
}
export default CardBag;