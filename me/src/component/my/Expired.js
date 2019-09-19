import React from "react";
import "../../assets/lfx/css/coupon.css";
import {
    withRouter
}from "react-router-dom"
class Expired extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="coupon">
                    <div className="x-title ">
                        <div className="x-title-one">
                            <div className="x-left">
                                <i className="iconfont x-icon" onClick={()=>(
                                    this.props.history.go(-1)
                                )}>&#xe667;
                                </i>
                            </div>
                            <div className="x-title-name">
                                <span>已过期优惠券</span>
                            </div>
                        </div>
                    </div>
                    <div className="x-content">
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Expired);