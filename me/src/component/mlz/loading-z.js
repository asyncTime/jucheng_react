import React from "react"
import { Spin, Icon } from 'antd';
class Loading extends React.Component{
    render(){
        const antIcon = <Icon type="loading" style={{ fontSize: 28 ,color:"#ff6743"}} spin />
        return(
           <div style={{width:"100%",textAlign:"center"}}>
               {console.log(this.props)}
               <Spin indicator={antIcon} spinning={this.props.loading}/>
           </div>
        )
    }
}
export default Loading