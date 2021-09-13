import React, { Component }  from 'react';

import { Row, Col, Tag } from 'antd';


export const dummyTagsData = [{
    tags: [
        "Abacavir",
        "Abacavir", "dolutegravir", "lamivudine", "Abacavir", "lamivudine", "Acyclovir", "Alemtuzumab", "Alendronate"]
},
{
    tags: [
        "Abacavir",
        "Abacavir", "dolutegravir", "lamivudine", "Abacavir", "lamivudine"]
}
]

// medicine tags Name
export function TagsStackView(props) {
    return (
        <Row>
            {props.tags.map((item) => <Col span={2}> <Tag color="#55acee"> {item} </Tag> </Col>)}
        </Row>
    )
}
