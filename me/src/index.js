import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import "./assets/css/M-css/Bus.css";
import "./assets/zsl/style/integral.css"
import "./assets/zsl/style/integral-shop.css"
import * as serviceWorker from './serviceWorker';
import store from "./store"
import {
    Provider
}from "react-redux";
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
