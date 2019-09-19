import React from "react"
import { Spin, Icon } from 'antd';
class Loading extends React.Component{
    constructor(){
        super()
        this.state = {
            spinning:false
        };
    }
    onClose = () => {
        this.setState({
            spinning: false,
        });
    };
    render(){
        return(
            <Icon type="loading" style={{ fontSize: 24 }} spin />
        )
    }
}
export default Loading