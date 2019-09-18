import React from "react"
export default class Me extends React.Component{
    render() {
        return(
            <div>
                我的
            </div>
        )
    }
    componentWillMount() {
        if(!localStorage.Longin){
            this.props.history.push('/Longin')
        }
    }
}