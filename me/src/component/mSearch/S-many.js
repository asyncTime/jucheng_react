import React, {Component} from '_react@16.9.0@react';
import {
    NavLink
}from "_react-router-dom@5.0.1@react-router-dom"
class SMany extends Component {
    render() {
        let AllList=this.props.list?this.props.list:[];
        console.log(AllList)
        return (
            <div id={'Recommend'} ref={'Many'}>
                <ul id={'Recommend-body'}>
                    {
                        AllList.map((v,i)=>(
                            <li key={i}>
                                <NavLink to={`/DetailPage/${v.schedular_id}`}>
                                    <div id={'Recommend-Image'} style={{backgroundImage:`url(${v.pic})`}}></div>
                                    <div id={'Recommend-Size'}>
                                        <p>{v.show_time_top}&nbsp;{v.show_time_bottom}</p>
                                        <h3><div dangerouslySetInnerHTML={{__html:v.name}}></div></h3>
                                        <p>{v.city_name}&nbsp;|&nbsp;{v.venue_name}</p>
                                        <p id={'Recommend-Font'}><span>￥{v.max_price}</span>&nbsp;起</p>
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
export default SMany;