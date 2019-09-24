import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import React from "react";
// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
        };
    }

    // dataList = [
    //     { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    //     { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    //     { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    //     { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    //     { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
    // ].map(obj => ({
    //     icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    //     title: obj.title,
    // }));

    showActionSheet = () => {
        const BUTTONS = ['Operation1', 'Operation2', '绑定到账户'];
        ActionSheet.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: BUTTONS.length - 1,
                destructiveButtonIndex: BUTTONS.length - 2,
                // title: 'title',
                message: 'I am description, description, description',
                maskClosable: true,
                'data-seed': 'logId',
                wrapProps,
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    showActionSheetBadge = () => {
        const BUTTONS = ['Operation', 'Operation2', 'Operation3', 'Operation4', 'Operation5', 'Delete', 'Cancel'];
        const BADGES = [{
            index: 1,
            dot: true,
        }, {
            index: 2,
            text: 3100,
        }, {
            index: 3,
            text: '推荐',
        }, {
            index: 4,
            text: '···',
        }];
        ActionSheet.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: BUTTONS.length - 1,
                destructiveButtonIndex: BUTTONS.length - 2,
                badges: BADGES,
                // title: 'title',
                message: 'I am description, description, description',
                maskClosable: true,
                'data-seed': 'logId',
                wrapProps,
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    render() {
        return (<WingBlank>
            <Button onClick={this.showActionSheet}>绑定新卡</Button>
            <WhiteSpace />
        </WingBlank>);
    }
}

export default Test;