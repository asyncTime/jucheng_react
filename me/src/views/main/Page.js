import React from "react"
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
// import pubsub from "pubsub-js"
import All_List from "../../store/actionCreact/navImage"
import TepySlideshow from "../../component/Page/tepySlideshow"
import TepySlideshow1 from "../../component/Page/tepySlideshow1";
import TepySlideshow2 from "../../component/Page/tepySlideshow2";
import TepySlideshow3 from "../../component/Page/tepySlideshow3"
 class Page extends React.Component{
    render() {
        console.log(this.props.tour_show_list)
        const classify_list=this.props.navImageList.classify_list?this.props.navImageList.classify_list:[];
        const PriorityInList=this.props.PriorityIn?this.props.PriorityIn.priorList:[];
        let operation_list=this.props.navImageList.operation_list?this.props.navImageList.operation_list:[];
        let list=operation_list.splice(0,2);
        return(
            <div>
                <TepySlideshow list={this.props.navImageList.slide_list}></TepySlideshow>
                <div id={'m-category'}>
                    <div id={'m-category1'}>
                        {
                            classify_list.map((v,i)=>(
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
                        <TepySlideshow1 list={PriorityInList}></TepySlideshow1>
                    </div>
                    <div id={'m-category3'}>
                        <ul id={"VipUi1"}>
                            {
                                list.map((v,i)=>(
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
                                operation_list.map((v,i)=>(
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
                <div id={'HotShow'}>
                    <div id={'HotShow1'}>
                    <div id={'HotShow-Tilte'}>
                        <h3>热门演出</h3>
                        <a href={'/#'}>></a>
                    </div>
                    <div id={'HotShow-Image'}>
                        <TepySlideshow2 list={this.props.HotShow}></TepySlideshow2>
                    </div>
                    </div>
                </div>
                <div id={'CycleOfsinging'}>
                    <div id={'CycleOfsinging-1'}>
                        <h3>轮回演唱</h3>
                        <a> ></a>
                    </div>
                    <div id={'CycleOfsinging-2'}>
                        <TepySlideshow3 list={this.props.tour_show_list}></TepySlideshow3>
                    </div>

                </div>
                <div>
                    <div id={'Page-Vip'}>
                        <div id={'Page-Vip-1'}>
                            <span className={'icon-shouye'}></span>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div id={'Page-Vip-2'}>
                            <span>99元/年</span>
                            <span className={'icon-next'}></span>
                        </div>
                    </div>
                    <div id={'Discount'}>
                        <div id={'Discount1'}></div>
                        <div id={'Discount2'}></div>
                    </div>
                </div>
                <div id={"lunhui"}></div>
            </div>
        )
    }
    componentDidMount() {
        this.props.get_PriorityIn();
        this.props.get_navImageList();
        this.props.get_HotShowImageList();
        this.props.grt_CycleOfsingingList()
    }

 }
function mapStateToProps(state,props) {
     console.log(state)
    return{
        navImageList:state.navImageList.navList,
        PriorityIn:state.PriorityIn.PriorityList,
        HotShow:state.HotShow.HotShow,
        tour_show_list:state.CycleOfsinging.tour_show_list
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Page)