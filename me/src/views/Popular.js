import React from "react"
import "../assets/liu/css/Popular.css"


 export default  class Popular extends React.Component{ 
	Click(v){		  
			this.props.history.push({pathname:"/allShow"})
						
	}
	Dclick(){
		this.props.history.go(-1)
	}
	render(){
		 let theaterList = this.props.theaterList;
		 
		 // if(JSON.parse(localStorage.theaterList)){
			// let item=JSON.parse(localStorage.theaterList)
		 // }else{
			//   let item = this.props.location.item
		 // }
		  let item = this.props.location.state.item
		  console.log(this.props)
		  console.log(item)
		  //item = item||[]
		  
     return(
		   <div className="hot-wrap">
				<div className="navbar">
					<div className="navbar1 iconfont icon-jiantou-zuo" onClick={this.Dclick.bind(this)}></div> 
					<div className="navbar2">{item.name}</div>
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
								<img src={require("../assets/liu/img/image1.png")} alt=""/>
							</div>
							<div className="bottom">演出</div>
						</a>
				</div>
			<div className="li">
					    <a>
							<div className="top">
								<img src={require("../assets/liu/img/image4.png")} alt=""/>
							</div>
							<div className="bottom">演出</div>
						</a>
					</div>
					<div className="li">
					    <a>
							<div className="top">
								<img src={require("../assets/liu/img/image2.png")} alt=""/>
							</div>
							<div className="bottom">演出</div>
						</a>
					</div>
					<div className="li"><a>
							<div className="top">
								<img src={require("../assets/liu/img/image3.png")} alt=""/>
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
						<div className="img-boxliu">
							<img src={v.pic}/>
						</div>
						<div className="detial-box">
							<div className="liutitle1">{v.schedular_name}</div>
							<div className="top"><div className="head1">{v.show_time}</div></div>
							<div>南山体育</div>
							<div className="head">$89</div>
						</div>
						</a>
			))
		  }
		  <div className="allshow" onClick={this.Click.bind(this)}><a>热门演出</a></div>
		  </div>
    </div>

		)
	}
	
}


