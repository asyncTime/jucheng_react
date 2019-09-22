import React from 'react';
import "../assets/lfx/css/set.css"

export default class Set extends React.Component {
    render() {
        return (
            <div className="set-warp">
                <div className="set">
                    <div className="x-set-title">
                        <div className="x-title-one">
                            <div className="x-left">
                                <i className="iconfont x-icon" >&#xe667;</i>
                            </div>
                            <div className="x-title-name">
                                <span>账户设置</span>
                            </div>

                        </div>
                    </div>
                    <div className="x-set-content">
                        <div className="x-title-warp">
                            <div className="x-content-title">
                                <span className="left">头像</span>
                                <div className="x-content-img">
                                    <img src={require("../assets/lfx/imgs/x_2.png")} alt=""/>
                                </div>
                            </div>
                            <div className="x-content-title">
                                <span className="left">昵称</span>
                            </div>
                        </div>
                        <div className="x-title-warp">
                            <div className="x-content-title">
                                <span className="left">手机号</span>
                                <p className="x-Right">1234567</p>
                            </div>
                            <div className="x-content-title">
                                <span className="left">邮箱</span>
                            </div>
                            <div className="x-content-title">
                                <span className="left">生日信息<b>(只允许设置一次)</b></span>
                                <p className="x-Right">1234567</p>
                            </div>
                            <div className="x-content-title">
                                <span className="left">登录密码</span>
                                <p className="x-Right">修改</p>
                            </div>
                            <div className="x-content-title">
                                <span className="left">支付密码</span>
                                <p className="x-Right">设置</p>
                            </div>
                            <div className="x-content-title">
                                <span className="left">实名认证</span>
                                <p className="x-Right">未认证</p>
                            </div>
                        </div>
                        <div className="x-submit">
                            退出登录
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
