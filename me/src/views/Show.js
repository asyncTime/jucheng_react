import React, {Component} from 'react';
import "../assets/mlz/css/lables.css";
import list from "../store/actionCreact/z-show"
import {
    bindActionCreators
} from 'redux';
import Bables from "../component/mlz/bables-z"
import Drawer from "../component/mlz/drawer-z"
import Loading from "../component/mlz/loading-z"
import {
    connect
} from "react-redux"
import pubsub from "pubsub-js";
class Show extends Component {
    navClick(id,e){
        //这个的主要功能是传递nav的id获取相应的数据
        let children=e.currentTarget.parentNode.children;
        for(let i=0;i<children.length;i++){
            children[i].style.color="";
            children[i].style.borderBottom=""
        }
        this.props.getShowList(id);
        e.currentTarget.style.color="orange"
        e.currentTarget.style.borderBottom=".04rem solid orange"
    }
    render() {
        const showCategoryList=this.props.showCategoryList.showCategoryList.show_category_list?this.props.showCategoryList.showCategoryList.show_category_list:[];
        const showList=this.props.showList.showList.list?this.props.showList.showList.list:[];
        const showCityList=this.props.showCityList.showCityList.city_list?this.props.showCityList.showCityList.city_list:[];
        return (
            <div  className="lables">
                <div className="title">
                    <i className="iconfont icon-xiangzuojiantou"></i>
                    <div>演出</div>
                    <Bables></Bables>
                </div>
                <div className="showType">
                    <ul>
                        <li onClick={this.navClick.bind(this,0)}>全部</li>
                        {
                            showCategoryList.map((v,i)=>(
                                <li key={v.category_id} onClick={this.navClick.bind(this,v.category_id)}>{v.name}</li>
                            ))
                        }
                    </ul>

                    <span>
                            <Drawer showCityList={showCityList}></Drawer>
                        </span>
                </div>
                <div className="loading">
                    <Loading></Loading>
                </div>
                <div className="lablesValue">
                    {
                        showList.map((v,i)=>(
                            <div className="lablesValues" key={v.schedular_id}>
                                <div className="lablesValues-left">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABGCAYAAACdW4eSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1MjYyNjY3RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1MjYyNjY4RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDUyNjI2NjVGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDUyNjI2NjZGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4a1BqAAAAEuUlEQVR42uxaSWgUQRStnhkVRAQ1egieRHAB8ShINCrugUgUxEgMKOTiyaMgeBACHj15CSiEYFTQSCCKCmo0CB5VcAHxFHLQuICimGSm/a+mftvTVC81052ZmCp4TKanl3p/efXrd5yp/S2umAcjJ+bJsEQtUUvUErVELVFL1BK1RC1RSzTDUbjUJxF5zsCQyHWelH/nz/VKGD0j6YlO6x5ROHs+8pzS2FORa9ke+vv0gW3xlicy+e5TFcfcL5PCfftG5LZsFbm2dnms2Hc5G6Lu6EMxTYBlSyPDojR4tcLafKyouRbWdzZsTPQc3CN4b5AsjT2RhnbfvxMzZ3rMo6aaUIPFg1bnseDeMzFz8YI0jOcl8jK8rQtHZ0VTxbUg4qxbL4r9V4SzZm3Ze73nykZo2eEZDNdizHR1JItI0w5DlEfdifHyd7I8iGGC8CaIRoUtE/R7CsckkYDRkMtsCDzP/9useZQfyiHOk8WkonJfJ06c81IXAtoAo+D5MEKmoYuJBz1a7XCaV5c/yUsyl1euEqKpyYuAYow4Ful6/1xSJRoMI/YycopFg1WWJ4TfONcqVJaUFKoqJidliAdDNU4cExs0aY7qlhf2LOcoyIRNFmEcjAR/fsrJf/4kPYrPqGWKw9dEfZ0s2p1BNQ3zEtZMGEeGK86jifNyAnUNU1TOYROihVpJhFl7OoHsY/HHwp/vOPrPKHSdadWTCVG/laVlSThwjCsaXlbi1lY5KC/lMR9RL9TImKzaYcbMtNYFIUxA5hblUrAUQ8hxTcrn6oqFqNCDoaRhSKQgaH7wsmNaHRnXuvxwP/GCEhr2OMjxOptURbVrMnkaqcJRxCGtU+/UPCrlnAjyQ0GcCQWrHnyXhTiFVzUk/R5HCHsRQkocVXxkJkZRZR3nra68ixq6vPRXYsGqLGnEFExyEw9Iqqj+nYhHmLwcV4Qn2cpVVYHZ14aW6Dwn6u/ppHGvuB5S3YiiPpU7GM3+8r/yKBZxuSHWlHONMIxUl9siVRcAIdu3NO6TasEArxVj1lnTSejWTa6Pg6WerhVqVbcRifpVlsXM/fghPIVIB0xDvu5EZZeBaufSi+eVKq5ap9oUGrrpXVu3DoOuPcl7SG1zrK1d1sDcS+KuYFSe4ze357RsrCXpANbcYahVjGR7k4zm7896XcG4DcPIsJEw1TV00Y0I7lnRPkXxoT1fvaLgnZF/M566R9Mcwegw7SCYbOkaZnlB6Ie9jKrIzwRh3bBEozqIFaGr+r+z0kpJe3BZGUuS1lfkb5zHa651k7zxjt3hBFopUa8U/e91vOurfAlsWymWqCVqiVqilqglaolaovWodb8T7ipwswd904OENsLSzPe+GZaAXwm3CbcIjwhTIectIuwiHCEcJiybC0R/EoYJg4QHEeREBOl9hE4C/l91cSMR/UO4r8iB5K+U5rZEkQXpvYSF9SCKhv0o4ZoKz28Zp9hyFdbHCa3ViKgp0ZeEfsJ1wkSdBLSZ0KWwKU2i48pzA4TXDbZqbCZ0E44pAxgT/aHUEuQeE0oNvkzmCbsJJwiHVH6HEi0qUQG5O4Tfc7Q2AMkO5emdygiS6Cv6RDf4Rh3zLst8hoB1/xVgAOy8jTaoIQsHAAAAAElFTkSuQmCC"/>
                                    <img src={v.pic}/>
                                </div>
                                <div className="lablesValues-right">
                                    <p><strong>{v.show_time_top}</strong></p>
                                    <div>
                                        <h3>{v.name}</h3>
                                    </div>
                                    <h4>{v.city_name} | {v.venue_name}</h4>
                                    <h5><span>￥{v.min_price}  </span>起</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.props.getShowList(0,0);
        pubsub.subscribe("cityIds",(a,cityId)=>{
            const city=cityId.cityId.cityId
            this.props.getShowList(0,city);
        })
        this.props.getShowCategoryList()
        this.props.getShowCityList();
    }
}


function mapStateToProps(state,props) {
    return{
        showCategoryList:state.showCategoryList,
        showList:state.showList,
        showCityList:state.showCityList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(list,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Show)

