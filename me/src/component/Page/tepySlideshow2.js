import React, {Component} from 'react';
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
class TepySlideshow2 extends Component {
    state={
        dataList:[]
    };
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props!==nextProps){
            this.setState({
                dataList:(nextProps.list?nextProps.list:[])
            })
        }
    }
    render() {
        return  (
            <div className="swiper-container Mthere">
                <div className="swiper-wrapper">
                            {
                                this.state.dataList.map((v, i) =>(
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
        );

    }
    componentDidMount(){
        new Swiper('.Mthere', {
            loop: true,
            slidesPerView : "auto",
            observer: true,
            observeParents: true,
        });
    }
    }
export default TepySlideshow2;
