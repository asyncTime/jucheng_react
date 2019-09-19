import React, {Component} from 'react';
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
class TepySlideshow2 extends Component {
    state={
        dataList:['1','2','3']
    };
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props!==nextProps){
            this.setState({
                dataList:nextProps.list
            })
        }
    }
    render() {
        return (
            <div className="swiper-container there">
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
        new Swiper('.there', {
            slidesPerView: 'auto',
        });
    }
    }
export default TepySlideshow2;
