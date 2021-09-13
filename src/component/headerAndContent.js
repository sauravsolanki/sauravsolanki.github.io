import React, { Component }  from 'react';

import { Row, Col, Typography } from "antd"
const { Title } = Typography;


export function HeaderAndContentView(props) {
    return (
        <Row >
            <Col span={24}>
                <Title level={2} align="left"> {props.Title} </Title>
            </Col>

            {props.reactNode}
        </Row>
    )
}