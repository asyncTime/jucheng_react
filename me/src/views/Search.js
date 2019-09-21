import React, {Component} from 'react';
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from 'redux';
import "../assets/css/M-css/Search.css"
import Searchs from '../store/actionCreact/navImage/SearchList'
class Search extends Component {
    render() {
        console.log(this.props.list)
        let listOne=this.props.list?this.props.list.slice(1,2):[];
        let listMany=this.props.list?this.props.list.slice(0,6):[];
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
                            {
                                listOne.map((v,i)=>(
                                    <li key={i}>{v}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div id={'Search-2'}>
                        <h3>热门搜索</h3>
                        <ul id={'Search-2Ul'}>
                            {
                                listMany.map((v,i)=>(
                                    <li key={i}>{v}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.get_SearchList_Size()
    }
}
function mapStateToProps(state,props) {
    return{
        list:state.M_Search.Search
    }
}
function mapDispatchToProps(dispacth) {
    return bindActionCreators(Searchs,dispacth)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);