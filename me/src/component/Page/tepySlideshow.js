import React from "react"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/navImage";
class TepySlideshow extends React.Component {
    render() {
        //console.log(this.props)
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
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps)
    }
    componentDidMount() {
        this.props.get_navImageList();
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
