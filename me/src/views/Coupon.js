import React from 'react';
import "../assets/lfx/css/coupon.css"
/*import {
    withRouter
}from "react-router-dom"*/
import Explain from "../component/my/Explain"
import Tips from "../component/my/Tips"
// import Help from "../component/my/Help";

class Coupon extends React.Component{
    constructor(props){
        super(props);
    }
    Click(){
        this.props.history.push({pathname:"/Me"})
    }

    render() {
        return(
            <div>

                <div className="coupon">
                    <div className="x-title ">
                        <div className="x-title-one">
                            <div className="x-left">
                                <i className="iconfont x-icon" onClick={this.Click.bind(this)}>&#xe667;
                                </i>
                            </div>
                            <div className="x-title-name">
                                <span>优惠券</span>
                            </div>
                        </div>
                        <div className="x-title-two">
                            <div className="x-sub">
                                <input type="text" placeholder="    优惠券码"/>
                            </div>
                            <Tips></Tips>
                        </div>
                    </div>
                    <div className="x-content">
                        <div className="x-content-num-warp">
                            <div className="x-content-num" >
                                <div>
                                    <p><span>0</span>张未使用</p>
                                </div>
                                <div>
                                    <Explain></Explain>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="x-footer">
                        <div className="x-footer-tips">
                            <span onClick={()=>(
                                this.props.history.push({pathname:"/Expired"})
                            )}>查看已过期优惠券</span>

                            <i className="iconfont x-foot-icon">&#xe621;
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// export default withRouter(Coupon);
export default Coupon;