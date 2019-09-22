import React, {Component} from 'react';
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from 'redux';
import "../assets/css/M-css/Search.css"
import Searchs from '../store/actionCreact/navImage/SearchList'
import SMany from "../component/mSearch/S-many";
class Search extends Component {
    render() {
        let listOne=this.props.list?this.props.list.slice(1,2):[];
        let listMany=this.props.list?this.props.list.slice(0,6):[];
        return (
            <div>
                <div id={'Search-Headers'}>
                    <div id={'Search-Text'}>
                        <span className={'iconfont icon-sousuo'}></span>
                        <input placeholder={'搜索热门演出'} ref={'Search_page'} onChange={this.changeInput.bind(this)}/>
                        <span className={'iconfont icon-fail'} onClick={this.clearInput.bind(this)}></span>
                    </div>
                    <div id={'Search-Size'} onClick={()=>this.props.history.go(-1)}>取消</div>
                </div>
                <div id={'Search-body'} ref={'Stype'}>
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
                                    <li key={i}  onClick={this.changeValue.bind(this)}>{v}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <SMany list={this.props.Search_ALL?this.props.Search_ALL.list:[]}></SMany>
            </div>
        );
    }
    componentDidMount() {
        this.props.get_SearchList_Size()
    }
    //onChange事件
    changeInput(){
        if(this.refs.Search_page.value.length>0){
            this.props.get_SearchAll(encodeURI(this.refs.Search_page.value))
            this.changgeStype('none')
        }else{
            this.changgeStype('block')
            document.querySelector('#Recommend').style.display='none'
        }
    }
    //改变热门搜索display
    changgeStype(type){
        if(this.props.list){
            this.refs.Stype.style.display=type
        }
    }
    //点击热门搜索给input复制
    changeValue(e){
        this.refs.Search_page.value=e.target.innerHTML
    }
    //清除input的值
    clearInput(){
        this.refs.Search_page.value=""
        document.querySelector('#Recommend').style.display='none'
        this.changgeStype('block')


    }
}
function mapStateToProps(state,props) {
    return{
        //热门所搜的值
        list:state.M_Search.Search,
        //搜索的内容
        Search_ALL:state.M_Search.Search_ALL
    }
}
function mapDispatchToProps(dispacth) {
    return bindActionCreators(Searchs,dispacth)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);