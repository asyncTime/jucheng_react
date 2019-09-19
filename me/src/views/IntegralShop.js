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
    render (){
        return (
            <div>
                <header>
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">积分商城</div>
                    <div className="right">
                        <span className="iconfont icon-sandian"></span>
                    </div>
                </header>
                <nav>
                    <div className="inter-top">
                        <span className="iconfont icon-jifen"></span>
                        <span className="qwe">12</span>
                        <div className="iten-detail">
                            积分明细
                            <span>&gt</span>
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
                </nav>
                <section>
                    <div className="price">
                        <div className="information">
                            <div className="img"></div>
                            <div className="info">
                                <div className="info-title">
                                    【小橙堡】经典幻想童话剧《爱丽丝梦游泡泡仙境》-贺州站
                                </div>
                                <div className="info-detail">
                                    <p>时间：2019.10.27 15:00</p>
                                    <p>城市：贺州</p>
                                    <p>场馆：广西贺州市文化艺术中心</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price">
                        <div className="information">
                            <div className="img"></div>
                            <div className="info">
                                <div className="info-title">
                                    【小橙堡】经典幻想童话剧《爱丽丝梦游泡泡仙境》-贺州站
                                </div>
                                <div className="info-detail">
                                    <p>时间：2019.10.27 15:00</p>
                                    <p>城市：贺州</p>
                                    <p>场馆：广西贺州市文化艺术中心</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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