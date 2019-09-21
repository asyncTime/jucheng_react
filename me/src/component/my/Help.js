import React from "react"
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';

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

class Help extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: 'none'
        };
    }
/*

    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '在线咨询' },
        { url: 'icon-weibiaoti-', title: '电话咨询' },
    ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 26 }} />,
        title: obj.title,
    }));
*/


    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
                options: this.dataList,
                // title: 'title',
                /*message: 'I am description, description, description',*/
            },
            (buttonIndex) => {
                this.setState({ clicked: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cance' });
                // also support Promise
                return new Promise((resolve) => {
                    /*Toast.info('closed after 1000ms');*/
                    setTimeout(resolve, 100);
                });
            });
    };


    render() {
        return (
            <WingBlank>
                <p onClick={this.showActionSheetBadge}> </p>
                <WhiteSpace />
                <p onClick={this.showShareActionSheet}>客服帮助</p>
                <WhiteSpace />
            </WingBlank>);
    }
}
export default Help;
