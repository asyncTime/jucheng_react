import React from "react"
import "../assets/liu/css/Popular.css"
import {
	connect,
	Router,
    Route
} from "react-redux"
import {
    bindActionCreators
} from 'redux';

import All_List from "../store/actionCreact/theater"
class Popular extends React.Component{ 
	render(){
		return(
		<div className="hot-wrap">
		
		
			<div className="navbar">
				<div className="navbar1">
					</div> <div className="navbar2">南山体育中心
				</div>
				<div className="navbar3">...</div>
			</div>
		
			<div className="yu"></div>
			<div className="contain">
				<img src="img/rAoKmV1EHaCADnVGAAQ8koT_BDc272.png" />
			</div>
			<div className="category-container">
				<div>
					<div className="li"><a>
							<div className="top">
								<img src="img/rAoKNV1EHdSAb3-5AAK6bR4HVj8338.png" />
							</div>
							<div className="bottom">演出</div>
						</a>
					</div>
					<div className="li"><a>
							<div className="top">
								<img src="img/rAoKNV1EHdSAb3-5AAK6bR4HVj8338.png" />
							</div>
							<div className="bottom">演出</div>
						</a></div>
					<div className="li"><a>
							<div className="top">
								<img src="img/rAoKNV1EHdSAb3-5AAK6bR4HVj8338.png" />
							</div>
							<div className="bottom">演出</div>
						</a></div>
					<div className="li"><a>
							<div className="top">
								<img src="img/rAoKmV1EHaCADnVGAAQ8koT_BDc272.png" />
							</div>
							<div className="bottom">演出</div>
						</a></div>
				</div>
		
			</div>
			<div className="title3">
				<div className="font">热门演出</div>
			</div>
		
			<div className="show-wrap">
				<a>
				<div className="img-box">
					<img src="img/rAoKmV1EHaCADnVGAAQ8koT_BDc272.png"/>
				</div>
				<div className="detial-box">
					<div className="title1">音乐剧世界交流中心睡大觉家具</div>
					<div className="top"><div className="head1">2019.9.10</div></div>
					<div className="top">刘天波</div>
					<div className="head">六天</div>
				</div>
				</a>
		
				
				
			     <div className="allshow"><a>热门演出></a></div>
			</div>
		    
		
		</div>
		)
	}
	componentDidMount() {
	    this.props.get_theaterList()
	    // console.log(this.props)
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
export default connect(mapStateToProps,mapDispatchToProps)(Popular)