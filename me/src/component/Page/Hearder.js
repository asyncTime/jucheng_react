import React, {Component} from 'react';
import {
    NavLink
}from "react-router-dom"
class Hearder extends Component {
    constructor(props){
        super(props)
        this.state = {};
        this.scrollTop = 0;
        this.handleScroll = this.handleScroll.bind(this)

    }
    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
    handleScroll(){
        if(window.scrollY>200){
          this.refs.color.style.backgroundColor='#fefefe'
            console.log(this)
        }else{
            this.refs.color.style.backgroundColor=''
        }
    }
    render() {
        return (
            <div id={'Hearders'} ref={'color'}>
                <NavLink to={'/Vip'}>
                    <div id={'City'}>
                        <span className={'iconfont icon-dizhikong'}></span>
                        <span>全国</span>
                    </div>
                </NavLink>
                <NavLink to={'/Search'}>
                    <div id={'Search'}>
                        <span className={'iconfont icon-sousuo'} id={'Search-Page'}></span>
                        <span>搜索热门演唱</span>
                    </div>
                </NavLink>
                <NavLink to={'/'}>
                    {
                        (this.props.Image?this.props.Image:[]).map((v,i)=>(
                            <div id={'Image'} key={i}>
                                <img src={v.pic}/>
                            </div>
                        ))
                    }

                </NavLink>
            </div>
        );
    }
}



export default Hearder;