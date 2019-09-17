import React from "react"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../store/actionCreact/navImage";
class TepySlideshow extends React.Component {

    render() {
        const bannerImg =this.props.ImagesList.slide_list?this.props.ImagesList.slide_list:[];
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
        this.props.get_navImageList();
        console.log(this.props.ImagesList)
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                }
            })
    }
}
function mapStateToProps(state,props) {
    return{
        ImagesList:state.navImageList.navList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TepySlideshow)