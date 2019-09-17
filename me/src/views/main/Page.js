import React from "react"
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import TepySlideshow from "../../component/tepySlideshow"
import All_List from "../../store/actionCreact/navImage"
 class Page extends React.Component{
    render() {

        const classify_list=this.props.navImageList.classify_list?this.props.navImageList.classify_list:[];
        const PriorityInList=this.props.PriorityIn?this.props.PriorityIn.priorList[0]:[];
        return(
            <div>
                <TepySlideshow></TepySlideshow>
                <div id={'m-category'}>
                    <div id={'m-category1'}>
                        {
                            classify_list.map((v,i)=>(
                                <div key={i} className={'m-category1'+i}>
                                    <a href={v.url}>
                                        <img src={v.pic} />
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
                        <div id={'m-category2-2'}>
                            <div id={'m-category2-2-1'}
                                 style={{backgroundImage:`url(${PriorityInList.pic})`}}></div>
                            <div id={'m-category2-2-2'}>
                                <h3>{PriorityInList.schedular_name}</h3>
                                <p id={'m-category2-2-2-p'}>{PriorityInList.city_name}|{PriorityInList.venue_name}</p>
                                <p id={'m-categoryTime'}>
                                    <span>{PriorityInList.pre_time}</span>
                                    <span>开始</span>
                                </p>
                                <a className={"m-category-bottom"}>开售提醒</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul id={"VipUi1"}>
                            <li>
                                <a>
                                    <h3>那都是的刷新</h3>
                                    <p>危机的口味OK Dowd请问反对</p>
                                    <div></div>
                                </a>
                            </li>
                            <li></li>
                        </ul>
                        <ul id={"VipUi2"}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.get_PriorityIn()
    }
 }
function mapStateToProps(state,props) {
    return{
        navImageList:state.navImageList.navList,
        PriorityIn:state.PriorityIn.PriorityList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Page)