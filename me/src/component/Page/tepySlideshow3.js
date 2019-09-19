import { Carousel, WingBlank } from 'antd-mobile';
import React from "react"
class TepySlideshow3 extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    };
    componentWillReceiveProps(nextProps, nextContext) {

        if(this.props!==nextProps){
            this.setState({
                data:nextProps.list.slice(0,6)
            })
        }
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //     });
        // }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel className="space-carousel"
                          frameOverflow="visible"
                          cellSpacing={20}
                          slideWidth={0.8}
                          autoplay
                          infinite={false}
                          //beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => this.setState({ slideIndex: index })}
                >
                    {this.state.data.map((val, index) => (
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
        );
    }
}

export default TepySlideshow3