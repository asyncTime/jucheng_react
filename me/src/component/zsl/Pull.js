import { Accordion, List } from 'antd-mobile';
import React from "react";

class AccordionExmple extends React.Component {
    constructor(props){
        super(props);
    }
    onChange = (key) => {
        console.log(key);
    }
    render() {
        const {city,scoresCityList} = this.props;
        // console.log(scoresCityList)
        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header={city}>
                        <List className="my-list">
                            {
                                // scoresCityList.map((v,i) => (
                                //     <List.Item></List.Item>
                                // ))
                            }
                        </List>
                    </Accordion.Panel>
                </Accordion>
            </div>
        );
    }
}

export default AccordionExmple;