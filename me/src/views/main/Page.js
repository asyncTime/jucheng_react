import React from "react"
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/navImage"
import TepySlideshow from "../../component/Page/tepySlideshow"
import TepySlideshow1 from "../../component/Page/tepySlideshow1";
import TepySlideshow2 from "../../component/Page/tepySlideshow2";
 class Page extends React.Component{
    render() {
        const classify_list=this.props.navImageList.classify_list?this.props.navImageList.classify_list:[];
        const PriorityInList=this.props.PriorityIn?this.props.PriorityIn.priorList:[];
        let operation_list=this.props.navImageList.operation_list?this.props.navImageList.operation_list:[];
        let list=operation_list.splice(0,2)
        return(
            <div>
                <TepySlideshow {...this.props.navImageList.slide_list}></TepySlideshow>
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
                        <TepySlideshow1 list={PriorityInList}></TepySlideshow1>
                    </div>

                    <div id={'m-category3'}>
                        <ul id={"VipUi1"}>
                            {
                                list.map((v,i)=>(
                                    <li key={i}>
                                        <a>
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
                                        {/*<p>为凤尾请问</p>*/}
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
                        <a>></a>
                    </div>
                    <div id={'HotShow-Image'}>
                        <TepySlideshow2></TepySlideshow2>
                    </div>
                    </div>
                </div>
                <div id={"lunhui"}></div>
            </div>
        )
    }
    componentDidMount() {
        this.props.get_PriorityIn()
        console.log(this.props,"page")
        this.props.get_PriorityIn();
        this.props.get_navImageList();
        this.props.get_HotShowImageList()
    }
 }
function mapStateToProps(state,props) {
    console.log(state,"page1")
    return{
        navImageList:state.navImageList.navList,
        PriorityIn:state.PriorityIn.PriorityList,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Page)