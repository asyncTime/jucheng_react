import React from "react"
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/navImage"
import TepySlideshow from "../../component/Page/tepySlideshow"
import TepySlideshow1 from "../../component/Page/tepySlideshow1";
import TepySlideshow2 from "../../component/Page/tepySlideshow2";
import TepySlideshow3 from "../../component/Page/tepySlideshow3";
import TepySlideshow4 from "../../component/Page/teySlideshow4";
import Categories from "../../component/Page/Categories";
import Recommend from "../../component/Page/Recommend"
import Hearder from "../../component/Page/Hearder";
 class Page extends React.Component{
     constructor(props){
         super(props);
         this.scrollTop = 0;
         this.handleScroll = this.handleScroll.bind(this)
     }
    render() {
        const classify_list=this.props.navImageList.classify_list?this.props.navImageList.classify_list:[];
        let operation_list=this.props.navImageList.operation_list?this.props.navImageList.operation_list:[];
        const sum=operation_list.slice(0,2);
        const num=operation_list.slice(0,3);
        const PriorListTwo=this.props.PriorList?this.props.PriorList.discountList:[];
        const PriorListOne=this.props.PriorList?this.props.PriorList.watchList:[];
        return(
            <div>
                <Hearder Image={this.props.navImageList.top_icon?this.props.navImageList.top_icon:[]}></Hearder>
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
                <div id={'HotShow'}>
                    <div id={'HotShow1'}>
                    <div id={'HotShow-Tilte'}>
                        <h3>热门演出</h3>
                        <a href={'/#'} className={'iconfont icon-xiaoyuhao-copy'}></a>
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
                        <TepySlideshow3 list={this.props.tour_show_list?this.props.tour_show_list:[]}></TepySlideshow3>
                    </div>
                </div>
                <div id={'m-Discount'}>
                    <div id={'Page-Vip'}>
                        <div id={'Page-Vip-1'}>
                            <span className={'iconfont icon-shouye'}></span>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div id={'Page-Vip-2'}>
                            <span>99元/年</span>
                            <span className={'iconfont icon-xiaoyuhao-copy'}></span>
                        </div>
                    </div>
                    <div id={'Discount'}>
                        <div id={'Discount-TL'}>
                            <div id={'Discount-TL-1'}>
                                <h3>专享折扣</h3>
                                <span className={'iconfont icon-xiaoyuhao-copy'}> </span>
                            </div>
                            <div id={'Discount-TL-2'}>
                                <h3>优先购票</h3>
                                <span className={'iconfont icon-xiaoyuhao-copy'}> </span>
                            </div>
                        </div>
                        <div id={'Discount1'}>
                            {
                                PriorListTwo.map((v,i)=>(
                                    <div id={'Discount1-2'} key={i}>
                                        <div>
                                            <img src={v.pic} alt={"bbb"}/>
                                        </div>
                                        <p><span>{v.min_discount}</span>折</p>
                                    </div>
                                ))
                            }

                        </div>
                        <div id={'Discount2'}>
                            {
                                PriorListOne.map((v,i)=>(
                                    <div id={'Discount1-3'} key={i}>
                                        <div>
                                            <img src={v.pic}/>
                                        </div>
                                        <p><span>{v.date}</span>开始</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <Categories children={this.props.Categories?this.props.Categories[0]:[]} background={{backgroundColor:'rgba(0,0,0,.2)'}}></Categories>
                <Categories children={this.props.Categories?this.props.Categories[1]:[]} background={{backgroundColor:' rgb(185, 175, 157)'}}></Categories>
                <Categories children={this.props.Categories?this.props.Categories[2]:[]} background={{backgroundColor:'rgb(108, 27, 15)'}}></Categories>
                <Categories children={this.props.Categories?this.props.Categories[3]:[]} background={{backgroundColor:'rgb(127, 170, 174)'}}></Categories>
                <Categories children={this.props.Categories?this.props.Categories[4]:[]} background={{backgroundColor:'rgb(152, 93, 64)'}}></Categories>
                <TepySlideshow4 {...this.props.theatre}></TepySlideshow4>
                <Recommend list={this.props.Recommend?this.props.Recommend:[]}></Recommend>
                <div id={"lunhui"}></div>
            </div>
        )
    }
     componentWillMount(){
         window.addEventListener('scroll', this.handleScroll)
     }
     componentWillUnmount(){
         window.removeEventListener('scroll',this.handleScroll)
     }
    componentDidMount() {
        this.props.get_PriorityIn();
        this.props.get_PriorityIn();
        this.props.get_navImageList();
        this.props.get_HotShowImageList();
        this.props.grt_CycleOfsingingList();
        this.props.get_priorAll();
        this.props.get_CategoriesAll();//类别会
        this.props.get_theatre_listAll()//热门场会
        this.props.get_recommend()//为你推荐
    }
     handleScroll(){
         if(document.documentElement.scrollHeight-window.scrollY<1000){
             this.props.get_recommend(this.props.page)
         }
     }
 }
function mapStateToProps(state,props) {
    return{
        navImageList:state.navImageList.navList,
        PriorityIn:state.navImageList.PriorityList,
        HotShow:state.navImageList.HotShow,
        tour_show_list:state.navImageList.tour_show_list,
        PriorList:state.navImageList.PriorList,
        Categories:state.navImageList.Categories,
        theatre:state.navImageList.theatre,
        Recommend:state.Recommends.Recommend,
        page:state.Recommends.page
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch,1)
}
export default connect(mapStateToProps,mapDispatchToProps)(Page)