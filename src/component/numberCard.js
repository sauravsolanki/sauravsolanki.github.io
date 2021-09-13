import React, { Component }  from 'react';

import { Row, Col, Typography } from 'antd';
import firstaid from '../image/firstaid.png'

export const dataBlock = [{
    image: firstaid,
    name: "Appointments",
    number: 110
},
{
    image: firstaid,
    name: "Appointments",
    number: 110
}, {
    image: firstaid,
    name: "Appointments",
    number: 110
}, {
    image: firstaid,
    name: "Appointments",
    number: 110
},
]


export function HomeNumberSummaryCard(props) {
    return (
        <Col span={4} style={{ backgroundColor: '#e8e2ff', height: '90px', borderRadius: '8' }}>
            <Row align="middle" style={{ margin: '20px 0' }}>
                <Col offset={2} span={6}>
                    <img src={props.image} style={{ width: '40px', height: '40px' }} />
                </Col>

                <Row>
                    <Col span={24} style={{ fontSize: 14 }}>
                        {props.name}
                    </Col>

                    <Col span={24} style={{ fontSize: 18, color: '#5733fc' }}>
                        {props.number}
                    </Col>

                </Row>
            </Row>
        </Col>

    )
}