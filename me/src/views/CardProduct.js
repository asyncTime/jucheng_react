import React from "react"
import "../assets/mlz/css/cardProduct.css"
import Bables from "../component/mlz/bables-z"
import Slider from "../component/mlz/swiper-z"
import list from "../store/actionCreact/z-show"
import Card from "../component/mlz/card-z"
import help from "../common/help"
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from "react-redux"

 class CardProduct extends React.Component{
    render(){
        const cardVipRuleList=this.props.cardVipRuleList.cardVipRuleList?this.props.cardVipRuleList.cardVipRuleList:[];
        const cardSliderList=this.props.cardSliderList.cardSliderList?this.props.cardSliderList.cardSliderList:[];
        const cardGroupList=this.props.cardGroupList.cardGroupList?this.props.cardGroupList.cardGroupList:[];
        const once_card=cardGroupList.once_card?cardGroupList.once_card:[];
        const cate_card=cardGroupList.cate_card?cardGroupList.cate_card:[];
        const store_card=cardGroupList.store_card?cardGroupList.store_card:[];
        return(
            <div className="card">
                <div className="title">
                    <i className="iconfont icon-xiangzuojiantou" onClick={()=>{this.props.history.go(-1)}}></i>
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
                        {
                            cardVipRuleList.map((v,i)=>(
                                <div className="vipPlusTicket" key={i}>
                                    <div className={help[v.benefits_icon]}></div>
                                    <p>{v.benefits_name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>

                    <div >
                        <div className="space">
                        </div>
                        <div className="valueCard">
                            <div className="vipPlusTitle">
                                <b>储值卡</b>
                                <span>{cardGroupList.store_title}</span>
                            </div>
                            <Card list={store_card}></Card>
                        </div>
                    </div>

                    <div >
                        <div className="space">
                        </div>
                        <div className="valueCard">
                            <div className="vipPlusTitle">
                                <b>品类·次卡</b>
                            </div>
                            <Card list={cate_card}></Card>
                        </div>
                    </div>

                    <div >
                        <div className="space">
                        </div>
                        <div className="valueCard">
                            <div className="vipPlusTitle">
                                <b>城市·次卡</b>
                            </div>
                            <Card list={once_card}></Card>
                        </div>
                    </div>

                </div>


                <div className="cardBottom">
                    <div>购买新卡</div><i>|</i>
                    <div>绑定新卡</div><i>|</i>
                    <div>我的卡包</div>
                </div>



            </div>
        )
    }
    componentDidMount(){
        this.props.getCardGroupList();
        this.props.getCardVipRuleList();
        this.props.getCardSliderList();
    }
}
function mapStateToProps(state,props) {
    return{
        cardSliderList:state.cardSliderList,
        cardVipRuleList:state.cardVipRuleList,
        cardGroupList:state.cardGroupList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(list,dispatch);
}
export default  connect(mapStateToProps,mapDispatchToProps)(CardProduct)