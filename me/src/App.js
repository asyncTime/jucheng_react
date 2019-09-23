import React from 'react';
import router from "./router/routerApp"
import {
  BrowserRouter as Router,
    Route,
    Switch,
    NavLink
}from "react-router-dom"
class App extends React.Component{
  render() {
      return(
          <Router>
              <Switch>
                {
                  router.map((v,i)=>{
                      return(
                          <Route   key={v.path} {...v}></Route>
						  
                      )
                  })
                }
              </Switch>
              < NavLink to={'/'}></NavLink>

          </Router>
      )
  }
}
export default App;
