import React, {Component} from 'react';
import {
    NavLink
}from "react-router-dom"
class Recommend extends Component {
    render() {
        let AllList=this.props.list.recommend_show_list?this.props.list.recommend_show_list:[];
        return (
            <div id={'Recommend'}>
                <div id={'Recommend-Tilte'}>
                    为你推荐
                </div>
                <ul id={'Recommend-body'}>
                    {
                        AllList.map((v,i)=>(
                            <li key={i}>
                                <NavLink to={`/DetailPage/${v.sche_id}`}>
                                    <div id={'Recommend-Image'} style={{backgroundImage:`url(${v.schePic})`}}></div>
                                    <div id={'Recommend-Size'}>
                                        <p>{v.show_time}&nbsp;{v.week}</p>
                                        <h3>{v.show_name}</h3>
                                        <p>{v.c_name}&nbsp;|&nbsp;{v.v_name}</p>
                                        <p id={'Recommend-Font'}><span>￥{v.high_price}</span>&nbsp;起</p>
                                    </div>
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </div>
        );
    }
}

export default Recommend;