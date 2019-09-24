import React from "react"
import "../../assets/lfx/css/my.css";
import {
    withRouter,
    NavLink
}from "react-router-dom";
// import Set from "../../component/my/Set"
 class Me extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        // console.log(this.props)
        return(
            <div>
                <div id="box">
                    <div className="x-my">
                        <div className="x-header">
                            <div className="x-pic">
                                <i className="iconfont icon-set" onClick={()=>(
                                    this.props.history.push({pathname:"/Set"})
                                )}> </i>
                                <div className="x-pic-main">
                                    <div className="x-pic-main-head">
                                        <div className="x-pic-main-head-pic">
                                            <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt="" />
                                        </div>
                                        <span className="x-pic-main-head-name">橙子</span>
                                        <span className="x-pic-main-head-id">ID：</span>
                                    </div>
                                    <div className="x-pic-main-label">
                                        <p className="x-pic-main-label-name">普通会员</p>
                                    </div>
                                    <div className="x-pic-main-label-cnt">
                                        <a href="/#" className="x-pic-main-label-item">
                                            <p className="x-pic-main-label-item-num">0</p>
                                            <p className="x-pic-main-label-item-name">账户余额</p>
                                            <div className="separator"> </div>
                                        </a>
                                        <div className="x-pic-main-label-item">
                                            <NavLink to={"/Integral"}>
                                                <p className="x-pic-main-label-item-num">0</p>
                                                <p className="x-pic-main-label-item-name">积分</p>
                                                <div className="separator"> </div>
                                            </NavLink>
                                        </div>

                                        <a href=" " className="x-pic-main-label-item" onClick={this.Click.bind(this)}>
                                            <p className="x-pic-main-label-item-num">0</p>
                                            <p className="x-pic-main-label-item-name">优惠券</p>
                                            <div className="separator"> </div>
                                        </a>
                                        <a href="/#" className="x-pic-main-label-item">
                                            <p className="x-pic-main-label-item-num-no">立即开通</p>
                                            <p className="x-pic-main-label-item-name">橙PLUS卡</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="/#" className="x_vip">
                                <img className="x-vip-pic" src={require("../../assets/lfx/imgs/x_3.png")} alt=""/>
                            </a>
                            <div className="x-setting">
                                <ul className="x-setting-list">
                                    <li className="x-setting-list-item">
                                        <a href="/#" className="x-setting-list-link">
                                            <i className="iconfont icon-order">
                                            </i>
                                            <p>我的订单</p>
                                        </a>
                                    </li>
                                    <li className="x-setting-list-item">
                                        <a href="/#" className="x-setting-list-link">
                                            <i className="iconfont icon-ticketholder">
                                            </i>
                                            <p>我的票夹</p>
                                        </a>
                                    </li>
                                    <li className="x-setting-list-item">
                                        <div className="x-setting-list-link">
                                            <NavLink to={"/cardbag"}>
                                                <i className="iconfont icon-cardpackage">
                                                </i>
                                                <p>我的卡包</p>
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="x-setting-list-item">
                                    </li>
                                </ul>
                                <ul className="x-setting-list">
                                    <li className="x-setting-list-item">
                                        <div className="x-setting-list-link">
                                            <NavLink to={"/buyName"}>
                                                <i className="iconfont icon-people">
                                                </i>
                                                <p>实名购票人</p>
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="x-setting-list-item">
                                        <div className="x-setting-list-link">
                                            <NavLink to={"/address"}>
                                                <i className="iconfont icon-address">
                                                </i>
                                                <p>收货地址</p>
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="x-setting-list-item">
                                        <a href="/#" className="x-setting-list-link">
                                            <i className="iconfont icon-feedback">
                                            </i>
                                            <p>意见反馈</p>
                                        </a>
                                    </li>
                                    <li className="x-setting-list-item">
                                        <a href="/#" className="x-setting-list-link">
                                            <i className="iconfont icon-help">
                                            </i>
                                            <p>客服帮助</p>
                                            {/*<Help></Help>*/}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    Click(){
        this.props.history.push({pathname:"/Coupon"})
    }
}
export default withRouter(Me);
