import React from "react"
import "../assets/mlz/css/cardProduct.css"
import Bables from "../component/mlz/bables-z"
import Slider from "../component/mlz/swiper-z"
import list from "../store/actionCreact/z-show"
import {
    bindActionCreators
} from 'redux'
import {
    connect
} from "react-redux"

 class CardProduct extends React.Component{
    render(){
        const cardSliderList=this.props.cardSliderList.cardSliderList?this.props.cardSliderList.cardSliderList:[];
        console.log(this.props,11111111)
        return(
            <div className="card">
                <div className="title">
                    <i className="iconfont icon-xiangzuojiantou"></i>
                    <div>购买新卡</div>
                    <Bables></Bables>
                </div>

                <div className="swiper">
                    <Slider cardSliderList={cardSliderList}></Slider>
                </div>
                <div className="vipPlus">
                    <div className="vipPlusTitle">
                        <b>VIP+</b>
                        <span>开通VIP+，演出随心看</span>
                        <div className="iconfont icon-arrowright"></div>
                    </div>

                    <div className="vipPlusBottom">
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                                <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                        <div className="vipPlusTicket">
                            <div className="iconfont icon-tongyong_guanyingquan"></div>
                            <p >优选购票</p>
                        </div>
                    </div>
                </div>
                <div className="space"></div>
                <div className="valueCard">
                    <div className="vipPlusTitle">
                        <b>储值卡</b>
                        <span>全国通用，购卡充值送100元</span>
                    </div>

                    <div className="valueCard-values">
                        <img src="https://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png" alt=""/>
                            <div>
                                <h2>橙PLUS卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                                <p>有效期：长期有效</p>
                                <h3><span>￥999</span> <i>赠送VIP+</i></h3>
                            </div>
                    </div>

                </div>


            </div>
        )
    }
    componentDidMount(){
        this.props.getCardSliderList();
        this.props.getCardVipRuleList();
    }
}
function mapStateToProps(state,props) {
    return{
        cardSliderList:state.cardSliderList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(list,dispatch);
}
export default  connect(mapStateToProps,mapDispatchToProps)(CardProduct)