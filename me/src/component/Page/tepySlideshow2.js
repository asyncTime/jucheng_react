import React, {Component} from '_react@16.9.0@react';
class TepySlideshow2 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                                <div className="swiper-slide" >
                                    <div id={"HotShow-Image-small"}>
                                        <img/>
                                        <h3>的速度人推荐你拉我dry图v一般hi我就客人TV u有</h3>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>

        );
    }
}
export default TepySlideshow2;