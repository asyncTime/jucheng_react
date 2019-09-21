import React, {Component} from 'react';
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/navImage";
import TepySlideshow1 from "./tepySlideshow1";
class Skind extends Component {
    render() {
        console.log(this.props)
        let operation_list=this.props.operation_list?this.props.operation_list:[];
        const sum=operation_list.slice(0,2);
        const num=operation_list.slice(0,3);
        return (
            <div id={'m-category'}>
                <div id={'m-category1'}>
                    {
                        (this.props.classify_list?this.props.classify_list:[]).map((v,i)=>(
                            <div key={i} className={'m-category1'+i}>
                                <a href={v.url}>
                                    <img src={v.pic} alt={"页面"} />
                                    <span>{v.name}</span>
                                </a>
                            </div>
                        ))
                    }

                </div>
                <div id={'m-category2'}>
                    <div id={'m-category2-1'}>
                        <div id={'m-category2-1-Left'}>
                            <span>优先购票</span>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div id={'m-category2-1-Right'}>
                            <span>99元/年></span>
                        </div>
                    </div>
                    <TepySlideshow1 list={this.props.PriorityIn?this.props.PriorityIn.discountList:[]}></TepySlideshow1>
                </div>
                <div id={'m-category3'}>
                    <ul id={"VipUi1"}>
                        {
                            sum.map((v,i)=>(
                                <li key={i}>
                                    <a href={'/#'}>
                                        <div id={'VipUi1_Font'}>
                                            <h3>{v.name}</h3>
                                            <div dangerouslySetInnerHTML={{__html: v.describe}}></div>
                                        </div>
                                        <div id={'VipUi1Image'} style={{backgroundImage:`url(${v.pic})`}}></div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <ul id={"VipUi2"}>
                        {
                            num.map((v,i)=>(
                                <li key={i}>
                                    <h3>{v.name}</h3>
                                    <div dangerouslySetInnerHTML={{__html: v.describe}}></div>
                                    <div id={'VipUi2Image'} style={{backgroundImage:`url(${v.pic})`}}></div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state,props) {
    console.log(state.navImageList)
    return{
        PriorityIn:state.navImageList.PriorityList,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Skind);