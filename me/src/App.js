import React from 'react';
import router from "./router/routerApp"
import {
  BrowserRouter as Router,
    Route,
    Switch
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
          </Router>
      )
  }
}
export default App;
