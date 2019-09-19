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
 class Theater extends React.Component{
	 constructor(){
		 super()
		 
	 }
	 Click(){
		
		 	this.props.history.push("/Popular")
		
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
				   <div className="theater-info1" onClick={this.Click.bind(this)}>
				   
					<a className="theater-pic-name-count" >
						<div className="ann"><img src= {v.pic}/></div>
						 <div className="bnn">
						 <div className="bnn1"> <p>{v.name}</p></div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Theater)