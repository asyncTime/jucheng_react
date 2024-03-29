import { Popover, NavBar, Icon } from 'antd-mobile';
import React from "react";
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Bubble extends React.Component {
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
                                 (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId"><span onClick={()=>{
                                     this.props.history.push({pathname:"/"})
                                 }}>首页</span></Item>),
                                 (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}><span onClick={()=>{
                                     this.props.history.push({pathname:"/Me"})
                                 }}>我的聚橙</span></Item>),
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
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                    </Popover>
                }
            >
            </NavBar>
        </div>);
    }
}
export default Bubble;
