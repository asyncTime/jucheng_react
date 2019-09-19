import React from "react";
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
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
class Explain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    };
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    };

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    };

    render() {
        return (
            <WingBlank>
                <text onClick={this.showModal('modal1')}>优惠券规则说明</text>
                <WhiteSpace />
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="活动规则"
                    footer={[{ text: '确定',onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height:305,overflow: 'scroll',fontSize:.25 ,textAlign:'left'}}>
                        <span>1、单笔订单只能使用1张优惠券，不能同时使用多张优惠券；</span><br/>
                        <span>2、请在有效期内使用优惠券，未使用的优惠券过期后，将自动作废；</span><br/>
                        <span>3、每张优惠券的使用条件请查看对应优惠券的使用说明；</span><br/>
                        <span>4、部分特殊演出不适用平台发放的所有优惠券，具体以付款结算为准；</span><br/>
                        <span>5、用户使用优惠券下订单，无论是否支付优惠券将不予退回；</span><br/>
                        <span>6、优惠券仅能在聚橙网提交订单时抵减应支付商品金额，不能进行兑现或其他用；</span><br/>
                        <span>7、使用优惠券时，优惠券与平台其他优惠不能同时享有，优惠券支付部分不开具发票</span><br/>
                        <span>8、优惠券严禁出售或转让，如经发现并证实的，该券将予以作废处理；</span><br/>
                        <span>9、如果在聚橙网使用通过不正当手段获得的优惠劵，聚橙网有权将该券予以作废处理，并要求此客户通过其它方式补足余款。</span><br/>
                        <span>10、聚橙网对优惠券使用条件享有最终解释权</span><br/>
                        <span>11、如需了解更多，请联系在线客服或拨打客服电话400-185-8666。</span><br/>
                    </div>
                </Modal>
            </WingBlank>
        );
    }
}

export default Explain;

