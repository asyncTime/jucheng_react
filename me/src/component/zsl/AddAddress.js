import React from 'react';
export default class AddAddress extends React.Component{
    render(){
        return (
            <div>
                <div id="zsl-header">
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">添加地址</div>
                    <div className="right"></div>
                </div>
                <div id="zsl-section">
                    <div className="info" id="info">
                        <div className="info-detail">
                            <div className="ju_info">
                                <span>收货人</span>
                                <input className="ju_info_input" placeholder="请输入收货人姓名"/>
                            </div>
                            <div className="ju_info">
                                <span>手机号</span>
                                <input className="ju_info_input" placeholder="请输入收货人手机号"/>
                            </div>
                            <div className="ju_info ">
                                <span>所在地区</span>
                                <input className="ju_info_input spicle" placeholder="请选择所在地区"/>
                                <span className="iconfont icon-xiaoyuhao-down-copy"></span>
                            </div>
                            <div className="ju_info">
                                <span>详细地址</span>
                                <input className="ju_info_input" placeholder="请输入街道、楼牌号等"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="zsl-article">
                    <div className="switch">
                        <span>设置默认地址</span>
                        <span className="switch-button"></span>
                    </div>
                </div>
                <div id="zsl-footer">
                    <div className="footer-button">
                        保存
                    </div>
                </div>
            </div>
        )
    }
}