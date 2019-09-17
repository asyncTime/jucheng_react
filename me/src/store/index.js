import {
    createStore,
    applyMiddleware
}from "redux"
<<<<<<< HEAD
import reducers from "./reducer"
import thunk from "redux-thunk";
export default createStore(reducers, applyMiddleware(thunk))
=======
import reducers from "./reducer";
import thunk from "redux-thunk";
export default createStore(reducers,applyMiddleware(thunk))
>>>>>>> 4772083b3846498582e30c27efb2196ff1e54d08
