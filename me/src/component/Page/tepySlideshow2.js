import React, {Component} from 'react';
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/navImage";
class TepySlideshow2 extends Component {
    render() {
        return (
            <div id={'HotShow'}>
                        <div id={'HotShow1'}>
                            <div id={'HotShow-Tilte'}>
                                 <h3>热门演出</h3>
                                    <a href={'/#'} className={'iconfont icon-xiaoyuhao-copy'}></a>
                            </div>
                            <div id={'HotShow-Image'}>
                                    <div className="swiper-container Mthere">
                                        <div className="swiper-wrapper">
                                            {
                                                (this.props.HotShow?this.props.HotShow:[]).map((v, i) =>(
                                                    <div className="swiper-slide namespace" key={i}>
                                                            <a href={v.schedular_url}>
                                                                <img src={v.pic} alt={'aaa'}/>
                                                                <h3>{v.show_name}</h3>
                                                            </a>
                                                    </div>
                                                ))
                                            }
                                </div>
                             </div>
                    </div>
                        </div>
                    </div>
        );
    }
    componentDidMount(){
        this.props.get_HotShowImageList();//热门演出
        new Swiper('.Mthere', {
            loop: true,
            slidesPerView : "auto",
            observer: true,
            observeParents: true,
        });
    }
    }
function mapStateToProps(state,props) {
    return{
        HotShow:state.navImageList.HotShow,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TepySlideshow2)
