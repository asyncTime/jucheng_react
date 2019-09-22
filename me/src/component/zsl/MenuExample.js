/* eslint global-require:0, no-nested-ternary:0 */
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import React from "react";
import {withRouter} from "react-router-dom"
let data = [];

class MenuExample extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }
    componentWillReceiveProps(a){
        // console.log(a.scoresCityList)
        a.scoresCityList.map((v,i)=>{
            console.log(v)
            data.push({label:v.name})
        })
        console.log(data)
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        // console.log(e.target.innerHTML)
        this.setState({
            show: !this.state.show,
        });
        if (!this.state.initData) {
            console.log("1111")
            this.setState({
                initData: data,
            });
            // console.log(this.state.initData)
        }
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
        // console.log(this.props)
    }

    render() {
        // console.log(this.state)
        const { initData, show } = this.state;
        // console.log(initData)
        const menuEl = (
            <Menu
                className="single-foo-menu"
                data={initData}
                name={['1']}
                level={1}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.6}
            />
        );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div className={show ? 'single-menu-active' : ''}>
                <div id="myself">
                    <div className="box">
                        <NavBar
                            leftContent="城市"
                            mode="light"
                            onLeftClick={this.handleClick}
                            className="single-top-nav-bar"
                        >
                        </NavBar>
                    </div>
                    <div className="box">
                        <NavBar
                            leftContent="积分"
                            mode="light"
                            onLeftClick={this.handleClick}
                            className="single-top-nav-bar"
                        >
                        </NavBar>
                    </div>

                </div>
                {show ? initData ? menuEl : loadingEl : null}
            </div>
        );
    }
}

export default MenuExample;