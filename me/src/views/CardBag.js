import React from "react";
class CardBag extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <div className="left">
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">我的卡包</div>
                    <div className="right">
                        <span className="iconfont icon-sandian"></span>
                    </div>
                </header>
                <section>
                    <div className="img">
                        <img src="../img/rAoKNVyumKiAfP1qAAACYTizNOw440.png" alt="暂无信用卡"/>
                        暂无信用卡
                    </div>
                </section>
                <footer>
                    <div className="buynewcard">购买新卡</div>
                    <div className="tree"></div>
                    <div className="bind-newcard">绑定新卡</div>
                    <div className="tree"></div>
                    <div className="my-newcard">我的卡包</div>
                </footer>
            </div>
        )
    }
}
export default CardBag;