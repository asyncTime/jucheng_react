import React from "react"

import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/theater"
import Theaterlun from "../../component/theaterlun"
 class Wallet extends React.Component{
    render() {
		 let {theaterList} = this.props;
		 theaterList=theaterList||[]
		 //console.log(theaterList)
		console.log()
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
				   
				   <div className="theater-info1">
					<a className="theater-pic-name-count">
						<div className="one"><img src= {v.pic}/></div>
						 <div className="two">
						 <div className="two1"> <p>{v.name}</p></div>
						 <div className="two2"><p>在线</p></div>
						 </div>
				   </a>
				   <a className="theater-link">
										  ...
				   </a>
				   </div>
				   <div className="theater-info2">
				   <Theaterlun ></Theaterlun>
				  
				   </div>
				   </div>
				   
					 </div>
					 ))
				  }
				  
				   
				  </div>
          
        )
    }
	
	

	componentDidMount() {
	    this.props.get_theaterList()
	    console.log(this.props)
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
export default connect(mapStateToProps,mapDispatchToProps)(Wallet)