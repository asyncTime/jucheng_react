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
import Theaterlun from "../../component/LIU/theaterlun"


import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'

 class Theater extends React.Component{
	 constructor(){
		 super()
	 }
	 Click(v){		
		    
		 	this.props.history.push({pathname:"/Popular",item:v})	
				
	 }
    render() {
		 let {theaterList} = this.props;
		  theaterList=theaterList||[]
		 //console.log(theaterList)		
        return(	
			<div id="app">
			
				<div className="theater-head">剧院</div>
				<div className="theater-head1"></div>
				<hr/>
				<div className="se"></div>   										  

											  
				{
					theaterList.map((v,i)=>( 
						<div className="theater-body" key={v.id}>
							<div className="theater-info">	
								<div className="theater-info1" onClick={this.Click.bind(this,v)}>
									<a className="theater-pic-name-count" >
										<div className="ann"><img src= {v.pic}/></div>
										<div className="bnn">
											<div className="bnn1"> <p>{v.name}</p></div>
											<div className="bnn2"><p>在线</p></div>
										</div>
									</a>
									<a className="theater-link">
										...
									</a>
								</div>
										   
					   <div className="theater-info2">
									
									{
										
									<div className="swiper-container">
											<div className="swiper-wrapper">
												<div className="swiper-slide">
												<div className = "shang"></div>
												<div className = "xia"></div>
												</div>
												<div className="swiper-slide"> sda</div>
												<div className="swiper-slide">Slide dsadsd3</div>
												<div className="swiper-slide">Slide 5</div>
												<div className="swiper-slide">Slide 6</div>
												<div className="swiper-slide">Slide 6</div>
												<div className="swiper-slide">Slide 6</div>
											</div>
										
										
									</div>
											
										
											
											
									}
										</div>
							</div>
						</div>
					))
				}
			</div>
		)			
    }
	
	
	componentWillUnmount() {
         if (this.swiper) { // 销毁swiper
            this.swiper.destroy()
         }
 }
   componentDidUpdate(){
    var mySwiper = new Swiper('.swiper-container',{
              slidesPerView : 3,
             centeredSlides :false,
   })
 }

	
	componentDidMount() {
		
		// var mySwiper = new Swiper('.swiper-container',{
		//              slidesPerView : 3,
		//             centeredSlides :false,
		// })
		
	    this.props.get_theaterList()
	    
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
export default connect(mapStateToProps,mapDispatchToProps)(Theater)