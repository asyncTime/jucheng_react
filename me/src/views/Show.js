import React, {Component} from 'react';
import "../assets/mlz/css/lables.css";
import axios from "axios"
// import {changeShowCategoryList} from "../store/actionCreact/z-show";
// import {changeShowList} from "../store/actionCreact/z-showList"
import {
    connect
} from "react-redux"
class Show extends Component {
    render() {
        console.log(this.props,"render")
        return (
            <div  className="lables">

                <div className="title">
                    <i className="iconfont icon-xiangzuojiantou"></i>
                    <div>我的余额</div>
                    <i className="iconfont icon-sangedian"></i>
                </div>

                <div className="showType">
                    <ul>
                        <li>全部</li>
                        <li>演唱会</li>
                        <li>音乐会</li>
                        <li>话剧歌剧</li>
                        <li style={{padding: 0,marginRight: 0}}>全国 <i className="iconfont icon-weizhi"></i></li>
                    </ul>
                </div>
                <div className="lablesValue">
                    <div className="lablesValues">

                        <div className="lablesValues-left">
                            <img src="../img/AccountBalance/host.png" alt={'类别'}/>
                            <img src="https://image.juooo.com/group1/M00/03/A8/rAoKNV1fNqOAKR7YAAB_-x8YGi8581.jpg" alt={'类别'}/>
                        </div>

                        <div className="lablesValues-right">
                            <p><strong>09/20 - 09/25</strong></p>
                            <h3>音乐剧史诗巨作《贝隆夫人》 Evita-武汉站</h3>
                            <h4>武汉 | 武汉剧院</h4>
                            <h5><span>￥280  </span>起</h5>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
    componentDidMount(){
        this.props.getShowCategoryList()
        this.props.getShowList();
        console.log(this.props,"componentDidMount")
    }
}


//必须要有返回值，返回值必须要是一个对象
//将仓库指定的状态与你的属性合并
function mapStateToProps(state,props) {
    console.log(state,999)//这个是你的仓库里面的值
    console.log(props,1010)//这个是index.js里面传递的参数
    return{
        // showList:state.news.newsList
    }
}
//操作状态的
function mapDispatchToProps(dispatch) {
    return{
        async getShowCategoryList(){
            const {data}=await axios.get("/jo/Search/getShowCategory?version=6.0.5&referer=2")
            // dispatch(changeShowCategoryList(data.newsList))
            console.log(data,"meng")
        },
        async getShowList(){
            const {data}=await axios.get("/ju/Show/Search/getShowList?category=37&city_id=0&page=1&keywords=&version=6.0.5&referer=2");
            const showList=data.data;
            // dispatch(changeShowList(showList))
            console.log(showList,"lala")
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Show)

