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
          this.refs.color.style.backgroundColor='#fefefe';
            this.refs.fcolor.style.color= 'red';
            this.refs.City.style.color='#b3b3b3';
            this.refs.City1.style.color='#b3b3b3';
            this.refs.City2.style.color='#b3b3b3';
        }else{
            this.refs.color.style.backgroundColor=''
            this.refs.fcolor.style.color= 'red';
            this.refs.City.style.color='#fefefe';
            this.refs.City1.style.color='#fefefe';
            this.refs.City2.style.color='#fefefe';
        }
    }
    render() {
        return (
            <div id={'Hearders'} ref={'color'}>
                <NavLink to={'/Vip'}>
                    <div id={'City'}>
                        <span className={'iconfont icon-dizhikong'} ref={'fcolor'}></span>
                        <span ref={'City'}>全国</span>
                    </div>
                </NavLink>
                <NavLink to={'/Search'}>
                    <div id={'Search'}>
                        <span className={'iconfont icon-sousuo'} id={'Search-Page'} ref={'City2'}></span>
                        <span ref={'City1'}>搜索热门演唱</span>
                    </div>
                </NavLink>
                <NavLink to={'/'}>
                    {
                        (this.props.Image?this.props.Image:[]).map((v,i)=>(
                            <div id={'Image'} key={i}>
                                <img src={v.pic} alt={'xixiix'}/>
                            </div>
                        ))
                    }

                </NavLink>
            </div>
        );
    }
}

export default Hearder;