import { Popover, NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React from "react"
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class Bables extends React.Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        return (<div>
            <NavBar
                mode="light"
                rightContent={
                    <Popover mask
                             overlayClassName="fortest"
                             overlayStyle={{ color: 'currentColor' }}
                             visible={this.state.visible}
                             overlay={[
                                 (<Item key="4" value="scan"  data-seed="logId"> <i  className="iconfont icon-xiaofangzi1" style={{paddingRight:"13px"}}></i>主页</Item>),
                                 (<Item key="5" value="special"  style={{ whiteSpace: 'nowrap' }}><i className="iconfont icon-weibiaoti-" style={{paddingRight:"13px"}}></i>我的聚橙</Item>),

                             ]}
                             align={{
                                 overflow: { adjustY: 0, adjustX: 0 },
                                 offset: [-10, 0],
                             }}
                             onVisibleChange={this.handleVisibleChange}
                             onSelect={this.onSelect}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-34px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >

                            <i  id="bables" className="iconfont icon-sangedian"></i>
                        </div>
                    </Popover>
                }
            >
            </NavBar>
        </div>);
    }
}
export default Bables;