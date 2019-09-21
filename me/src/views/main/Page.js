import React from "react"
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/navImage"
import TepySlideshow from "../../component/Page/tepySlideshow"
import TepySlideshow2 from "../../component/Page/tepySlideshow2";
import TepySlideshow3 from "../../component/Page/tepySlideshow3";
import TepySlideshow4 from "../../component/Page/teySlideshow4";
import Categories from "../../component/Page/Categories";
import Recommend from "../../component/Page/Recommend"
import Hearder from "../../component/Page/Hearder";
import Skind from "../../component/Page/Skind";
 class Page extends React.Component{
     constructor(props){
         super(props);
         this.scrollTop = 0;
         this.handleScroll = this.handleScroll.bind(this)
     }
    render() {
        const PriorListTwo=this.props.PriorList?this.props.PriorList.discountList:[];
        const PriorListOne=this.props.PriorList?this.props.PriorList.watchList:[];
        return(
            <div>
                <Hearder Image={this.props.navImageList.top_icon?this.props.navImageList.top_icon:[]}></Hearder>
                <TepySlideshow list={this.props.navImageList.slide_list}></TepySlideshow>
                <Skind {...this.props.navImageList}></Skind>
                <TepySlideshow2></TepySlideshow2>
                <TepySlideshow3></TepySlideshow3>
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
         console.log(this.props)
        this.props.get_PriorityIn();//优先购票
        this.props.get_navImageList();//获取图片轮播图，类别
        this.props.get_priorAll();//专享折扣
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
        PriorList:state.navImageList.PriorList,
        Categories:state.navImageList.Categories,
        theatre:state.navImageList.theatre,
        Recommend:state.navImageList.Recommend,
        page:state.navImageList.page
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Page)