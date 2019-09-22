import React from "react";
import {
    NavLink
} from "react-router-dom"
class Address extends React.Component{
    render(){
        return (
            <div>
                <div id="Address-header">
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">收货地址</div>
                    <div className="right">
                        <span className="iconfont icon-sandian"></span>
                    </div>
                </div>
                <div id="Address-nav">
                    <div className="location">
                        <img src={require("../assets/zsl/img/rAoKNVyumKiAfP1qAAACYTizNOw440.png")} alt=""/>
                        <p className="location-txt">暂时没有收货地址</p>
                    </div>
                </div>
                <div id="Address-section">
                    <div className="button" >
                        <NavLink to={"/addaddress"}>
                            +添加收货地址
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Address;