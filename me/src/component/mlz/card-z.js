import React from "react"
import "../../assets/mlz/css/cardProduct.css"
export default class Card extends React.Component{
    render(){
        const list=this.props.list?this.props.list:[];
        return(

            <div>
                {
                    list.map((v,i)=>(
                        <div className="valueCard-values" key={i}>
                            <img src={v.card_image} alt=""/>
                            <div className="valueCard-values-right">
                                <div>{v.name}</div>
                                <p>有效期：{v.avail_mouth===0?"长期有效":v.avail_mouth+"个月"}</p>
                                <h3><span>￥{v.card_price}</span> <i>{v.give_vip===1?"赠VIP+":`兑换券${v.use_limit}张`}</i></h3>
                            </div>

                        </div>

                    ))
                }

            </div>
        )
    }

}