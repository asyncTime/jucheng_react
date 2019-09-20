import React, {Component} from 'react';
import {
    NavLink
}from "react-router-dom"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class Categories extends Component {
    constructor(proprs){
        super(proprs)
    }
    state={
        list:['1','2','3']
    }
    render() {
        let list=this.props.children.list?this.props.children.list:[];
        return (
                <div id={'Categories'}>
                        {
                            <div>
                                <div id={'Categories-Tilte'}>
                                    <h3>{this.props.children.title}</h3>
                                    <NavLink to={{pathname:'/show',state:{cat_id:this.props.children.cat_id}}}><span className={'iconfont icon-next'}> </span></NavLink>
                                </div>
                                <div id={'Categories-1'}  style={this.props.background}>
                                    <div id={'Categories-1-Img'}>
                                        <NavLink to={`/DetailPage/${(list[0]?list[0]:"").sche_id}`}><img src={list[0]?list[0].pic:""}/></NavLink>
                                    </div>
                                    <div id={'Categories-1-Size'}>
                                        <p id={'Categories-1-SizeP'}>
                                            <span>{list[0]?list[0].date:""}</span>
                                            <span>{list[0]?list[0].week:""}</span>
                                        </p>
                                        <h3>{list[0]?list[0].schedular_name:""}</h3>
                                        <p id={'Categories-1-SizeP2'}>{list[0]?list[0].city_name:""}|{list[0]?list[0].venue_name:""}</p>
                                    </div>
                                </div>
                                <div id={'Categories-Image'}>
                                    <div className="swiper-container four">
                                        <div className="swiper-wrapper" id={'Categories-Image-Size'}>
                                            {
                                                list.map((v, i) =>(
                                                        <div className="swiper-slide namespace" key={i} style={{marginLeft:'0.2rem'}}>
                                                            <div id={'Categories-Img'}>
                                                                <>
                                                                    <NavLink to={`/DetailPage/${v.sche_id}`}><img src={v.pic}/></NavLink>
                                                                    <h3 id={'Categories-Image-H3'}>{v.schedular_name}</h3>
                                                                    <p><span>￥&nbsp;{v.high_price} </span> &nbsp;起</p>
                                                                </>
                                                            </div>
                                                        </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                </div>
        );
    }
    componentDidMount() {
        new Swiper('.four', {
                slidesPerView : "auto",
                centeredSlides : false,
            observer: true,
            observeParents: true,
        });
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props!==nextProps){
            this.setState({
                list:nextProps
            })
        }
    }
}
export default Categories;