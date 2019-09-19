import React from "react"
import { Drawer, Button } from 'antd';
import pubsub from "pubsub-js";
import "../../assets/mlz/css/lables.css"
class Drawers extends React.Component {
    state = {
        visible: false,
        showCityList:[],
        cityId:[]
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    componentWillReceiveProps(nextProps){
        if(this.props!==nextProps){
            this.setState({
                showCityList:nextProps,
                cityId:nextProps
            })
        }
    }
    liOnclick(id,e){
        // console.log(id)
        let children=e.currentTarget.parentNode.children;
        for(let i=0;i<children.length;i++){
            children[i].style.color="";
            children[i].style.background=""
        }
        e.currentTarget.style.color="#ff6743"
        e.currentTarget.style.background="#fff1e9"
        pubsub.publish("cityId",{cityId:id});
    }
    reset(){
        // this.liOnclick();
       const reset= document.querySelector("#reset")
        let children=reset.parentNode.children;
        for(let i=0;i<children.length;i++){
            children[i].style.color="";
            children[i].style.background=""
        }
        reset.style.color="#ff6743"
        reset.style.background="#fff1e9"
        document.querySelector("#city").innerHTML="全国";
    }
    submit(){
        pubsub.publish("cityIds",{cityId:this.state.cityId});
        this.onClose()
        const showCityList=this.state.showCityList.showCityList?this.state.showCityList.showCityList:[];
        const cityId=this.state.cityId.cityId?this.state.cityId.cityId:"0";
        const cityName=showCityList.find((v)=>v.city_id==cityId);
        const cityResultName=cityName?cityName:"全国"
       document.querySelector("#city").innerHTML=cityResultName.name;
    }
   componentWillMount(){
       pubsub.subscribe("cityId",(a,cityId)=>{
           //console.log(cityId,1111)
           this.setState({
               cityId
           })
       })
    }
    render() {
        const showCityList=this.state.showCityList.showCityList?this.state.showCityList.showCityList:[];
        return (
            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <div>
                    <Button  style={{ padding:"0 0 0", backgroundColor:"#fff",border:"none",color:"#232323",boxShadow: "0 0 0 0"}}type="primary" onClick={this.showDrawer} >
                        <span style={{color:"#efefef"}}>|</span>&ensp;<span style={{color:"#232323"}} id="city">全国</span><i className="iconfont icon-weizhi"></i>
                    </Button>
                </div>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute'}}
                >
                 <h3>城市</h3>
                    <ul>
                        <i></i>
                        <li  id="reset"onClick={this.liOnclick.bind(this,0)} style={{color:"#ff6743",background:"#fff1e9"}}>全国</li>
                        {
                            showCityList.map((v,i)=>(
                                <li key={v.city_id} onClick={this.liOnclick.bind(this,v.city_id)}>{v.name}</li>
                            ))
                        }
                    </ul>
                    <div className="drawer-bottom">
                        <button onClick={this.reset.bind(this)}>重置</button>
                        <button onClick={this.submit.bind(this)}>确定</button>
                    </div>
                </Drawer>
            </div>
        );
    }
}
export default Drawers


