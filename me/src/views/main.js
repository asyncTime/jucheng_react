import React from "react"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
}from "react-router-dom"
import router from "../router/routerMe";
import route from "../router/routerNavLink"
export default class Main extends React.Component{
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                    {
                        router.map((v,i)=>{
                            return(
                                <Route exact  key={v.path} path={v.path} component={v.component}></Route>
                            )
                        })
                    }
                    </Switch>
                    {
                        route.map((v,i)=>{
                            return(
                                <NavLink activeStyle={{color:'red'}} exact to={v.path}>{v.title}</NavLink>
                            )
                        })
                    }
                </Router>
            </div>
        )
    }
}