import React from "react"
import {
	connect,
	Router,
    Route
} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/theater"



import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'

 class Theater extends React.Component{
	 constructor(){
		 super()
	 }
	 ClickL(n){		
		 //if(localStorage.){
			// this.props.history.push({pathname:"/Popular",item:n})
		 //}else{
			 this.props.history.push({pathname:"/Popular",state:{item:n}})	
		 //}
			  			
	 }
    render() {
		 let {theaterList} = this.props;
		  theaterList=theaterList||[]
		
        return(	
			<div id="app">
				<div className="theater-head">剧院</div>
				<div className="theater-head1"></div>
				<hr/>
				<div className="se"></div>   										  										  
				{
					theaterList.map((n,i)=>( 
					
						<div className="theater-body" key={n.id}>
							<div className="theater-info">	
								<div className="theater-info1" onClick={this.ClickL.bind(this,n)}>
									<a className="theater-pic-name-count" >
										<div className="ann"><img src= {n.pic}/></div>
										<div className="bnn">
											<div className="bnn1"> <p>{n.name}</p></div>
											<div className="bnn2"><p>{n.count}在售演出</p></div>
										</div>
									</a>
									<a className="theater-link">
										...
									</a>
								</div>
							<div className="theater-info2">		
									<div className="swiper-container">
											<div className="swiper-wrapper">
										{
											 n.showList.map(v=>(
												 <div id="zuo" className="swiper-slide" key={v.id}>
													<div className = "shang">{v.show_time}</div>
													<div className = "xia"><img src= {v.pic}/></div>
												 </div>
											 ))					
										}			
										</div>							
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		)			
    }
	
	
	// componentWillUnmount(){
 //         if (this.swiper) { // 销毁swiper
 //            this.swiper.destroy()
 //         }
 // }
   componentDidUpdate(){
    var mySwiper = new Swiper('.swiper-container',{
              slidesPerView : 3,
             centeredSlides :false,
   })
  
 }

	
	componentDidMount(){
		// var mySwiper = new Swiper('.swiper-container',{
		//              slidesPerView : 3,
		//             centeredSlides :false,
		// })	
	    this.props.get_theaterList()
	}
}

function mapStateToProps(state,props){
	 return{
	    theaterList:state.theaterList.theaterList,
		
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Theater)