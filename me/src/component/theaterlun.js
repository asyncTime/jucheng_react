import React from "react"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
import {
    connect
}from "react-redux";
import {
    bindActionCreators
} from 'redux';
import All_List from "../store/actionCreact/theater"
class Theaterlun extends React.Component {
	
    render() {
      
		//console.log(this.props.v,1111)
		
        return (
             <div>
                
                	<div className="swiper-container">
                		<div className="swiper-wrapper">
                			<div className="swiper-slide" id="bo">
							<div className = "shang"></div>
							<div className = "xia"></div>
							</div>
                			<div className="swiper-slide" id="bo">sda</div>
                			<div className="swiper-slide" id="bo">Slide dsadsd3</div>
                			<div className="swiper-slide" id="bo">Slide 5</div>
                			<div className="swiper-slide" id="bo">Slide 6</div>
                			<div className="swiper-slide" id="b0">Slide 6</div>
                			<div className="swiper-slide" id="bo">Slide 6</div>
                		</div>
                	
                	
                </div>
            </div>
        )
    }
    componentDidMount() {
       this.props.get_theaterList()
            var mySwiper = new Swiper('.swiper-container',{
             slidesPerView : 3,
            centeredSlides :false,
})
    }
}



function mapStateToProps(state,props){
	
	 return{
	  theaterList:state.theaterList.get_theaterList
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Theaterlun)