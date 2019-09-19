import React, {Component} from 'react';
import {
    NavLink
}from "react-router-dom"
class TeySlideshow4 extends Component {
    state={
        list:[]
    };
    render() {
        console.log(this.state.list)
        return (
            <div id={'Hot'}>
                <div id={'Hot-Tlite'}>
                    <h3>热门场馆</h3>
                    <span> > </span>
                </div>
                    {
                        this.state.list.map((v,i)=>(
                            <div key={i}>
                                <div id={'Hot-body'}>
                                    <div id={'Hot-body-1'}>
                                        <div id={'Hot-body-1-1'}>
                                            <div id={'Hot-body-1-1Image'} style={{backgroundImage:`url(${v.pic})`}}></div>
                                            <div id={'Hot-body-1-1Size'}>
                                                <h3>{v.name}</h3>
                                                <p>{v.count}在场演出</p>
                                            </div>
                                            <NavLink to={`/prop/${v.id}`}><span className={'iconfont  icon-more'}></span></NavLink>
                                        </div>
                                        <div id={'Hot-body-1-2'}>
                                                    <p id={'Hot-body-1-2P'}>
                                                        <span>12</span>
                                                        <span>21</span>
                                                    </p>
                                                <p id={'Hot-body-Xian'}>
                                                    <span></span>
                                                    <span></span>
                                                </p>
                                            </div>
                                        <ul id={'Hot-body-1-3'}>
                                                    <div>
                                                    <li>
                                                        <img/>
                                                    </li>
                                                    </div>
                                        </ul>
                                </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props!==nextProps){
            this.setState({
                list:nextProps.theatre_list
            })
        }
    }
}

export default TeySlideshow4;