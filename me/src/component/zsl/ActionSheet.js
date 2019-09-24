import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import React from "react";
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class Talk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <WingBlank>
                <Button onClick={this.showModal('modal2')}>绑定新卡</Button>
                <WhiteSpace />
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    afterClose={() => { console.log('afterClose'); }}
                >
                    <List renderHeader={() => <div style={{textAlign:"left",fontWeight:"600",fontSize:".5rem"
                    ,color:"#000"}}>欢乐橙卡</div>} className="popup-list">
                        {['卡号', '密码'].map((i, index) => (
                            <List.Item key={index}>{i}<input type="text" style={{border:"none",paddingLeft:".5rem"}} placeholder={"请输入"+i} key={index}/></List.Item>

                        ))}
                        <List.Item>
                            <Button type="primary" style={{backgroundColor:"orange"}} onClick={this.onClose('modal2')}>绑定到账户</Button>
                        </List.Item>
                    </List>
                </Modal>
            </WingBlank>
        );
    }
}
export default Talk;