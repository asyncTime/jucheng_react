import React, {Component} from 'react';
import {
    NavLink
}from "react-router-dom"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
class TeySlideshow4 extends Component {
    state={
        list:[]
    };
    render() {
        return (
            <div id={'Hot'}>
                <div id={'Hot-Tlite'}>
                    <h3>热门场馆</h3>
                    <span> > </span>
                </div>
                <div id={'Hot-body'}>
                    <div className="swiper-container Mthere">
                        <div className="swiper-wrapper">
                {
                    this.state.list.map((v, i) => (
                        <div className="swiper-slide m-five" key={i}>
                                    <div id={'Hot-body-1'} >
                                        <div id={'Hot-body-1-1'}>
                                            <div id={'Hot-body-1-1Image'}
                                                 style={{backgroundImage: `url(${v.pic})`}}></div>
                                            <div id={'Hot-body-1-1Size'}>
                                                <h3>{v.name}</h3>
                                                <p>{v.count}在场演出</p>
                                            </div>
                                            <NavLink to={`/prop/${v.id}`}><span
                                                className={'iconfont  icon-more'}></span></NavLink>
                                        </div>
                                        <div id={'All-Image-Size'}>
                                            {
                                                v.showList.map((n, m) => (
                                                    <div id={'Image-Size'} key={m}>
                                                        <div id={'Hot-body-1-2'}>
                                                            <p id={'Hot-body-1-2P'}>
                                                                <span>{n.show_time}</span>
                                                                <span></span>
                                                            </p>
                                                        </div>
                                                        <ul id={'Hot-body-1-3'}>
                                                            <div>
                                                                <li>
                                                                    <NavLink to={`/DetailPage/${n.id}`}> <img src={n.pic} alt={'图片'}/></NavLink>
                                                                </li>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                    </div>
                        </div>
                    ))
                }
                </div>
                    </div>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props!==nextProps){
            this.setState({
                list:nextProps.theatre_list?nextProps.theatre_list:[]
            })
        }
    }
    componentDidMount(){
        new Swiper('.m-five', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            observer: true,
            observeParents: true,
        })
    }
}

export default TeySlideshow4;