import React from "react"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
import {
    Link
}from "react-router-dom"
class TepySlideshow extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const bannerImg =this.props.slide_list;
        return (
            <div className="App">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bannerImg.map((v,i)=>(
                                <div className="swiper-slide" key={i}>
                                    <a href={v.url}><img src={v.image_url} /></a>
                                </div>
                            ))
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}
export default TepySlideshow