import React from "react";
import Pull from "../component/zsl/Pull";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import integralShopCreator from "../store/actionCreact/integral/integralShop"
import {getAllScoresList, getScoresCityList} from "../store/reducer/integral/integralShop";
class IntegralShop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score:0
        }
    }
    render (){
        return (
            <div>
                <div id="zsl-header">
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">积分商城</div>
                    <div className="right">
                        <span className="iconfont icon-sandian"></span>
                    </div>
                </div>
                <div id="zsl-nav">
                    <div className="inter-top">
                        <span className="iconfont icon-jifen"></span>
                        <span className="qwe">{this.props.location.state.scoreNew}</span>
                        <div className="iten-detail" onClick={
                            () => {
                                this.props.history.push({
                                    pathname:"/integral"
                                })
                            }
                        }>
                            积分明细
                            <span className="iconfont icon-xiaoyuhao-down-copy"></span>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="city">
                            城市
                            <span></span>
                        </div>
                        <div className="integral">
                            积分
                            <span></span>
                        </div>
                    </div>
                </div>
                <div id="zsl-section">
                    {
                        this.props.AllScoresList.map((v,i) => (
                            <div className="price" key={i}>
                                <div className="information">
                                    <div className="img"></div>
                                    <div className="info">
                                        <div className="info-title">
                                            {v.schedular_name}
                                        </div>
                                        <div className="info-detail">
                                            <p>时间：{v.show_time}</p>
                                            <p>城市：{v.city_name}</p>
                                            <p>场馆：{v.venue_name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getScoresCityList();
        this.props.getAllScoresList();
    }
}
function mapStateToProps(state) {
    return {
        scoresCityList:state.getScoresCityList.scoresCityList,
        AllScoresList:state.getAllScoresList.AllScoresList
    }
}
export default connect(mapStateToProps,dispatch => bindActionCreators(integralShopCreator,dispatch))(IntegralShop)