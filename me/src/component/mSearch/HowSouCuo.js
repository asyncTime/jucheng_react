import React, {Component} from 'react';

class HowSouCuo extends Component {
    render() {

        return (


        )
    }
    changgeStype(){

        if(this.props.list){
            this.refs.Stype.style.display="none"
        }
    }
    changeValue(e){
        this.refs.Search_page.value=e.target.innerHTML
    }

        componentDidMount() {
            this.props.get_SearchList_Size()
        }

}

export default HowSouCuo;