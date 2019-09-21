import React from "react"
import "../assets/liu/css/Popular.css"


 export default  class Popular extends React.Component{ 
	Click(v){		
			    
			 	this.props.history.push({pathname:"/allShow"})	
					
	}
	render(){
		 let {theaterList} = this.props;
		  let {item} = this.props.location
		  item = item||[]
		  
     return(
		   <div className="hot-wrap">
				<div className="navbar">
					<div className="navbar1">
					</div> <div className="navbar2">{item.name}</div>
					<div className="navbar3">...</div>
				</div>
			    <div className="yu">
			</div>
				
				
			<div className="contain">
				<img src={item.pic}/>
			</div>
			<div className="category-container">
				<div>
					<div className="li">
					    <a>
							<div className="top">
								<img src="img/rAoKNV1EHdSAb3-5AAK6bR4HVj8338.png" />
							</div>
							<div className="bottom">演出</div>
						</a>
				</div>
			<div className="li">
					    <a>
							<div className="top">
								<img src="img/rAoKNV1EHdSAb3-5AAK6bR4HVj8338.png" />
							</div>
							<div className="bottom">演出</div>
						</a>
					</div>
					<div className="li">
					    <a>
							<div className="top">
								<img src="img/rAoKNV1EHdSAb3-5AAK6bR4HVj8338.png" />
							</div>
							<div className="bottom">演出</div>
						</a>
					</div>
					<div className="li"><a>
							<div className="top">
								<img src="img/rAoKmV1EHaCADnVGAAQ8koT_BDc272.png" />
							</div>
							<div className="bottom">演出</div>
						</a>
					</div>
			    </div>
		
			</div>
			<div className="title3">
				<div className="font">热门演出</div>
			</div>
		<div className="show-wrap">
	     {
			item.showList.map((v,i)=>(
			  
						<a key={v.id}>
						<div className="img-box">
							<img src={v.pic}/>
						</div>
						<div className="detial-box">
							<div className="title1">{v.schedular_name}</div>
							<div className="top"><div className="head1">{v.show_time}</div></div>
							<div>南山体育</div>
							<div className="head">$89</div>
						</div>
						</a>
			))
			
		  }
		  <div className="allshow" onClick={this.Click.bind(this)}><a>热门演出></a></div>
		  </div>
    </div>

		)
	}
	
}


