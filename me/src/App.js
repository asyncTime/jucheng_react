import React from 'react';
import router from "./router/routerApp"
import {
  BrowserRouter as Router,
    NavLink,
    Route,
     Switch
}from "react-router-dom"
class App extends React.Component{
  render() {
      return(
          <Router>
            {
              router.map((v,i)=>{
                  return(
                      <Route exact  key={v.path} path={v.path} component={v.component}></Route>
                  )
              })
            }

            <NavLink exact to={"/"}></NavLink>
          </Router>
      )
  }
}
export default App;
