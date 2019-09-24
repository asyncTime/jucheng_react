import React from "react";

class BuyName extends React.Component{
    render(){
        return (
            <div>
                <div id="BuyName-header">
                    <div className="left" onClick={()=>{
                        this.props.history.push({
                            pathname:"/Me"
                        })
                    }}>
                        <span className="iconfont icon-dayuhao"></span>
                    </div>
                    <div className="center">实名认证</div>
                    <div className="right"></div>
                </div>
                <div id="BuyName-nav">
                    <div className="input">
                        <input type="text" placeholder="*真实姓名"/>
                        <div className="tree"></div>
                        <input type="text" placeholder="*身份证号码"/>
                    </div>
                </div>
                <div id="BuyName-section">
                    <div className="alert" style={{display:"none"}}>请填写中文姓名</div>
                    <div className="sec-bottom">
                        <div className="verify-hint">
                            实名认证后不可更改或取消，请谨慎填写，
                        </div>
                        <div className="verify-hint">聚橙网将尊重并保护您的隐私。</div>
                        <div className="button">下一步</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BuyName;