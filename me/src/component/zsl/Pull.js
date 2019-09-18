import { Accordion, List } from 'antd-mobile';
import React from "react";

class Pull extends React.Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="城市">
                        <List className="my-list">
                            <List.Item>content 1</List.Item>
                            <List.Item>content 2</List.Item>
                            <List.Item>content 3</List.Item>
                        </List>
                    </Accordion.Panel>
                </Accordion>
            </div>
        );
    }
}

export default Pull;
