import React from "react"
import { Spin, Icon } from 'antd';
class Loading extends React.Component{
    render(){
        const antIcon = <Icon type="loading" style={{ fontSize: 28 ,color:"#ff6743"}} spin />
        return(
           <div>
               <Spin indicator={antIcon} spinning={this.props.loading.spinning}/>
           </div>
        )
    }
}
export default Loading