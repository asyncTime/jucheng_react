import React from "react"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
class TepySlideshow extends React.Component {
    constructor(props){
        super(props) ;
        this.state={
            dataList:['1','2','3','4','5','6']
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props!=nextProps){
            this.setState({
                dataList:nextProps.list
            })
        }

    }

    render() {
        console.log(this.state.dataList.length)
       // const bannerImg =this.props.ImagesList.slide_list?this.props.ImagesList.slide_list:[];
        return (
                 <div className="swiper-container one">
                     <div className="swiper-wrapper">
                         {
                             this.state.dataList.map((v,i)=>(
                                <div className="swiper-slide" key={i}>
                                    <a href={v.url}>
                                        <img src={v.image_url} />
                                    </a>
                                </div>
                            ))
                       }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>

        )
    }
    componentDidMount() {
            new Swiper('.one', {
                autoplay: true,
                loop: true,
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                }
            })
    }
    componentWillMount() {

    }
}
export default TepySlideshow
