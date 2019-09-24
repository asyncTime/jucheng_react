import React from "react";
import axios from "axios";
import {
    NavLink
} from "react-router-dom"
class Address extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            locationList:[]
        }
    }
    render(){
        const {locationList} = this.state;
        console.log(locationList)
        return (
            <div>
                <div id="Address-header">
                    <div className="left" onClick={()=>{
                        this.props.history.push({
                            pathname:"/Me"
                        })
                    }}>
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">收货地址</div>
                    <div className="right">
                        <span className="iconfont icon-sandian"></span>
                    </div>
                </div>
                <div className="blank"></div>
                <div id="Address-nav">
                    <div style={{display:(locationList?"none":"block")}}>
                        <div className="location">
                            <img src={require("../assets/zsl/img/rAoKNVyumKiAfP1qAAACYTizNOw440.png")} alt=""/>
                            <p className="location-txt">暂时没有收货地址</p>
                        </div>
                    </div>
                    {
                        locationList.map((v,i)=>(
                            <div className="detail" key={i}>
                                <div className="detail-info">
                                    <h3><span>{v.name}</span><span style={{marginLeft:".4rem"}}>{v.tel}</span></h3>
                                    <p>{v.location+v.detail}</p>
                                </div>
                                <div className="ico">
                                    <span className="iconfont icon-gengduo"></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="blank2"></div>
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
    async getLocation(){
        const {data} = await axios.get("/jo/getLocation");
        const {reply} = data;
        this.setState({
            locationList:reply
        })
        console.log(this.state.locationList);
    }
    componentDidMount(){
                this.getLocation()
    }
}
export default Address;