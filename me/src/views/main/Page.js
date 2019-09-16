import React from "react"
import {connect} from "react-redux"
import TepySlideshow from "../../component/tepySlideshow"
// import {get_nav} from "../../store/actionCreact/navImage";
 class Page extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.history.location.state.list.slide_list)
    }
    render() {
        return(
            <div>
                <TepySlideshow {...this.props.history.location.state.list}></TepySlideshow>
            </div>
        )
    }
}
function mapStateToProps(state,props) {
    return{
        navImageList:state.navImageList.navList
    }
}
export default connect(mapStateToProps,null)(Page)