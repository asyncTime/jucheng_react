import React, {Component} from 'react';
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
class TepySlideshow2 extends Component {
    constructor(){
        super()
    }
    state={
        dataList:['1','2','3']
    };
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props!=nextProps){
            this.setState({
                dataList:nextProps.list
            })
        }
    }
    render() {
        return null
    }
    componentDidMount(){
        new Swiper('.there', {
        });
        console.log("222")
    }
    }
export default TepySlideshow2;
