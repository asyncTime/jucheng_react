import React from "react"
import "../assets/mlz/css/showDetal.css"
class ShowDetal extends React.Component{
    render(){
        return(
            <div className="showDetal">
                <div className="showDetalFirst">


                    <img className="bgShadow" src="https://image.juooo.com/group1/M00/02/59/rAoKNVvo5WmASzG_AACol97sJPc725.jpg" alt=""/>

                    <div className="titleShadow">

                        <div className="bgShadowIn">
                            <div className="titleTop">
                                <div className="titleTop_left">
                                    <i className="iconfont icon-xiangzuojiantou"></i>
                                </div>
                                <div className="titleTop_center">
                                    演出详情
                                </div>
                                <div className="titleTop_right">
                                    <i className="iconfont icon-icon_share"></i>
                                    &ensp;&ensp;
                                    <i className="iconfont icon-home"></i>
                                </div>
                            </div>

                            <div className="titleBody">
                                <div className="titleBody_left">
                                    <img src="https://image.juooo.com/group1/M00/02/59/rAoKNVvo5WmASzG_AACol97sJPc725.jpg" alt=""/>
                                </div>
                                <div className="titleBody_right">
                                    <div>
                                        【高清放映】英国国家剧院现场NT-live 《哈姆雷特》-柳州站
                                    </div>
                                    <div>
                                        <span>￥99-169</span>
                                        <a>套</a>
                                    </div>
                                </div>
                            </div>

                        </div>








                    </div>


                    <div className="titleShadowBottom">
                        <div className="titleShadowBottom_left">
                            <div>
                                <span>10/19</span><a href="#">周六</a><i></i>
                            </div>
                            <div>
                                柳州|柳钢文化中心
                            </div>
                        </div>
                        <div className="titleShadowBottom_right">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ShowDetal