import React from "react"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
// import {
//     connect
// }from "react-redux";
// import {
//     bindActionCreators
// } from 'redux';
// import All_List from "../../store/actionCreact/theater"
export default class Theaterlun extends React.Component {
	
    render() {
           let {showList} = this.props 
		   console.log(showList)
      return (
	      <div>
				{
			showList.map((v,i)=>(
			  <div className="swiper-container">
			  		<div className="swiper-wrapper">
			  			<div className="swiper-slide">
			  			</div>
			  			<div className="swiper-slide"> sda</div>
			  			<div className="swiper-slide">Slide dsadsd3</div>
			  			<div className="swiper-slide">Slide 5</div>
			  			<div className="swiper-slide">Slide 6</div>
			  			<div className="swiper-slide">Slide 6</div>
			  			<div className="swiper-slide">Slide 6</div>
			  		</div>
			  	
			  	
			  </div>
			
			))	
				
						
					
						
						
				}
		   </div>		
              )
    }
     componentDidMount(){
    var mySwiper = new Swiper('.swiper-container',{
                 slidesPerView : 3,
                centeredSlides :false,
    })
    }
}



