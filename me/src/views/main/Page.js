import React from "react"
import {connect} from "react-redux"
import TepySlideshow from "../../component/tepySlideshow"
 class Page extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const classify_list=this.props.history.location.state?this.props.history.location.state.list.classify_list:[];

        return(
            <div>
                <TepySlideshow image={(this.props.history.location.state?this.props.history.location.state.list:[])}></TepySlideshow>
                <div id={'m-category'}>
                    <div id={'m-category1'}>
                        {
                            classify_list.map((v,i)=>(
                                <div key={i}className={'m-category1'+i}>
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
                            <div id={'m-category2-2-1'}></div>
                            <div id={'m-category2-2-2'}>
                                    <h3>ui撒谎大撒按市场卡阿克萨科性能的</h3>
                                    <p id={'m-category2-2-2-p'}>你哦都看你从事的可怜虫</p>
                                    <p id={'m-categoryTime'}>
                                        <span>09/23</span>
                                        <span>开始</span>
                                    </p>
                                    <a className={"m-category-bottom"}>开售提醒</a>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
    componentDidMount() {

    }
 }
function mapStateToProps(state,props) {
    return{
        navImageList:state.navImageList.navList
    }
}
function mapDispatchToProps(dispatch) {

}
export default connect(mapStateToProps,mapDispatchToProps)(age)
// export default Page