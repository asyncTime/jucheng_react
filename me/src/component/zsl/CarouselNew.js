import { Carousel, WingBlank } from 'antd-mobile';
import React from "react";
import pubsub from "pubsub-js"
class CarouselNew extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        imgArr:[]
    }
    componentDidMount() {
        pubsub.subscribe("hot",(typeName,param)=>{
            console.log(typeName,param)
            this.setState({
                imgArr:param
            })
        })
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => {}}//console.log(`slide from ${from} to ${to}`)
                    afterChange={index => {}}//console.log('slide to', index)
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require("../../assets/zsl/img/rAoKmV1HgkCAb2YwAAHrpGkPSSY083.png")}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}
export default CarouselNew;