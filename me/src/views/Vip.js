import React, {Component} from 'react';
import list from "../store/actionCreact/Vip";
import "../assets/lfx/css/set.css"
import "../assets/lfx/css/vip.css"
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from "react-redux"

class Vip extends Component {
    render() {
        const {getnavList}=this.props;
        return (
            <div>
                <div className="x-set-title">
                    <div className="x-title-one">
                        <div className="x-left">
                            <i className="iconfont x-icon2" >&#xe667;</i>
                        </div>
                        <div className="v-title-name">
                            <span>开通VIP+会员</span>
                        </div>
                    </div>
                </div>

                <div className="x-set-content">
                    <div className="x-vip-info">
                        <div className="v-info-block">
                            <h2 className="v-info-block-title">
                                VIP+尊享10大会员权益
                            </h2>
                            <div className="x-vip-swiper">
                                {/*{
                                    getnavList.map((v,i)=>(
                                        <div key={i}>
                                            <p>{v.benefits_desc}</p>
                                            <i>{v.benefits_icon}</i>
                                            <p>{v.benefits_name}</p>
                                            <p>{v.benefits_rule}</p>
                                        </div>
                                    ))
                                }*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.props.getNavList()
        // console.log(22222)
    }
}

function mapStateToProps(state,props) {
    return{
        navList:state.navList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(list,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Vip)