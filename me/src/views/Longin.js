import React from "react"
import {
    Link
}from "react-router-dom"
export default class Longin extends React.Component{
    render() {
        return(
            <div>
                <Link to={'/me'}>
                    嘿嘿
                </Link>
            </div>
        )
    }
}