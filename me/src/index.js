import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import "./assets/css/M-css/Bus.css";
import "./assets/zsl/style/common.css"
import "./assets/zsl/style/integral.css"
import "./assets/zsl/style/integral-shop.css"
import "./assets/zsl/style/cardBag.css"
import "./assets/zsl/font/iconfont.css"
import * as serviceWorker from './serviceWorker';
import store from "./store"
import {
    Provider
}from "react-redux";
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
