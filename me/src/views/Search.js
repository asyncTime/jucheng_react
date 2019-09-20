import React, {Component} from 'react';
import {
    connect
}from "react-redux"
import "../assets/css/M-css/Search.css"
class Search extends Component {
    render() {
        return (
            <div>
                <div id={'Search-Headers'}>
                    <div id={'Search-Text'}>
                        <span className={'iconfont icon-sousuo'}></span>
                        <input placeholder={'搜索热门演出'}/>
                        <span className={'iconfont icon-fail'}></span>
                    </div>
                    <div id={'Search-Size'}>取消</div>
                </div>
                <div id={'Search-body'}>
                    <div id={'Search-1'}>
                        <h3>
                            <span>历史搜索</span>
                            <span className={'iconfont icon-iconfontshanchu1'}></span>
                        </h3>
                        <ul>
                            <li>马亚坤</li>
                        </ul>
                    </div>
                    <div id={'Search-2'}>
                        <h3>热门搜索</h3>
                        <ul id={'Search-2Ul'}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {

    }
}
function mapStateToProps(state,props) {
    return{

    }
}
function mapDispatchToProps(dispacth) {
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);