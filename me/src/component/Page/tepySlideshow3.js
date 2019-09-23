import { Carousel, WingBlank } from 'antd-mobile';
import React from "react"
import {connect} from "react-redux"
import {
    bindActionCreators
} from 'redux';
import All_List from "../../store/actionCreact/navImage";
class TepySlideshow3 extends React.Component {
    state = {
        imgHeight: 176,
    };
    render() {
        return (
            <div id={'CycleOfsinging'}>
                <div id={'CycleOfsinging-1'}>
                    <h3>轮回演唱</h3>
                    <a> ></a>
                </div>
                <div id={'CycleOfsinging-2'}>
            <WingBlank>
                <Carousel className="space-carousel"
                          frameOverflow="visible"
                          style={{ touchAction:'none'}}
                          cellSpacing={20}
                          slideWidth={0.8}
                          autoplay
                          infinite={false}
                          dots={false}
                >
                    {
                        (this.props.tour_show_list?this.props.tour_show_list:[]).map((val, index) => (
                        <div
                            key={val}
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <img
                                src={val.pic}
                                alt={val.show_name}
                                id={'TepySlideshow3-Image'}
                                style={{verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            <h3 id={'CycleOfsinging-2-2'}>{val.show_name}</h3>
                            <p id={'CycleOfsinging-2-3'}>{val.schedular_num}场巡演</p>
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.grt_CycleOfsingingList();//轮回演唱
    }
}
function mapStateToProps(state,props) {
    return{
        tour_show_list:state.navImageList.tour_show_list,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TepySlideshow3)