
import React from "react"
import "../assets/liu/css/allshow.css"
import {
	connect,
	Router,
    Route
} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../store/actionCreact/theater"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'


class Allshow extends React.Component{ 
	render(){
		console.log(this.props.datas)
	  let {datas} = this.props;
	  // let data= []||datas.datas
	  // console.log(data,10000000000)
     return( 
	  <div id="liutianbo">
	  	<header className="header">
	  		<div className="search-top"></div>
	  		<div className="search-nav">
	  			<div id="liubing" className="swiper-container">
	  				<div id="haibo" className="swiper-wrapper">
	  					<div className="swiper-slide" id="liuchang">
	  						<div className="liuone">全部品</div>
	  					</div>
	  					<div className="swiper-slide" id="liuchang"><span>演唱会</span></div>
	  					<div className="swiper-slide" id="liuchang">
	  						<div>音乐会</div>
	  					</div>
	  					<div className="swiper-slide" id="liuchang">
	  						<div>话歌剧</div>
	  					</div>
	  					<div className="swiper-slide" id="liuchang">
	  						<div>div亲子</div>
	  					</div>
	  					<div className="swiper-slide" id="liuchang">
	  						<div>音乐剧</div>
	  					</div>
	  					<div className="swiper-slide" id="liuchang">
	  						<div>舞蹈黎</div>
	  					</div>
	  					<div className="swiper-slide" id="liuchang">
	  						<div>舞蹈巴</div>
	  					</div>
	  					<div className="swiper-slide" id="liuchang">
	  						<div>舞蹈黎</div>
	  					</div>
	  				</div>
	  			</div>
	  
	  		</div>
	  		<div className="search-bottom"></div>
	  	</header>
	  	<div className="dingqi"></div>
	  	<div className="show-wrap">
	     
		 
		 {
	datas.map((v,i)=>(
		  	<div className="liua" key={v.id}>
		  	<div className="img-box">
		  		<img className="liuimg" src={"https://image.juooo.com/"+v.pic}/>
		  	</div>
		  	<div className="detial-box">
		  		<div className="title1">{v.schedular_name}</div>
		  		<div className="top">
		  			<div className="head1">{v.show_time}</div>
		  		</div>
		  		<div className="top">{v.name}</div>
		  		<div className="head">${v.min_price}</div>
		  	</div>
		  </div>
		
		
		))	 
			 
			 
			 
		 }
	  	
	  	</div>
	  </div>
		)
	}
   componentDidMount(){
		var mySwiper = new Swiper('.swiper-container',{
			slidesPerView: 5,
			centeredSlides: false,
		})
	   this.props.all_show()		
	}
}

function mapStateToProps(state,props){
	console.log(111,state)
	console.log(state.allShow.all_show.datas)
	 return{
	    datas:state.allShow.all_show.datas
	}
	
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Allshow)

