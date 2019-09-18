import React, {Component} from 'react';

class TepySlideshow1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div id={'m-category2-2'}>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                              this.props.list.map((v,i)=>(
                                    <div className="swiper-slide" id={'swiper-slide'} key={i}>
                                        <div id={'m-category2-2-1'}
                                                 style={{backgroundImage:`url(${v.pic})`}}></div>
                                        <div id={'m-category2-2-2'}>
                                            <h3>{v.schedular_name}</h3>
                                            <p id={'m-category2-2-2-p'}>{v.city_name}|{v.venue_name}</p>
                                            <p id={'m-categoryTime'}>
                                                <span>{v.pre_time}</span>
                                                <span>开始</span>
                                            </p>
                                            <a className={"m-category-bottom"}>开售提醒</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default TepySlideshow1;
