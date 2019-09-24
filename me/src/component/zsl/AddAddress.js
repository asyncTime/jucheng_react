import React from 'react';
import axios from "axios";
export default class AddAddress extends React.Component{
    render(){
        return (
            <div>
                <div id="zsl-header">
                    <div className="left" onClick={()=>{
                        this.props.history.push({
                            pathname:"/address"
                        })
                    }}>
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
                                <input ref = "name" className="ju_info_input" placeholder="请输入收货人姓名"/>
                            </div>
                            <div className="ju_info">
                                <span>手机号</span>
                                <input ref = "tel" className="ju_info_input" placeholder="请输入收货人手机号"/>
                            </div>
                            <div className="ju_info ">
                                <span>所在地区</span>
                                <input ref = "location" className="ju_info_input spicle" placeholder="请选择所在地区"/>
                                <span className="iconfont icon-xiaoyuhao-down-copy"></span>
                            </div>
                            <div className="ju_info">
                                <span>详细地址</span>
                                <input ref = "detail" className="ju_info_input" placeholder="请输入街道、楼牌号等"/>
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
                    <div className="footer-button" onClick={()=>{
                        this.addLocation();
                    }}>
                        保存
                    </div>
                </div>
            </div>
        )
    }
    async addLocation(){
            let name = this.refs.name.value;
            let tel = (this.refs.tel.value) / 1;
            let location = this.refs.location.value;
            let detail = this.refs.detail.value;
            console.log(name,tel,location,detail)
            const {data} = await axios.get("/jo/addLocation", {
                    params: {
                        name,
                        tel,
                        location,
                        detail
                    }
                }
            )

        if(data.ok === 1){
            console.log(data)
            this.refs.name.value = this.refs.tel.value = this.refs.location.value = this.refs.detail.value = "";
        }
    }
}