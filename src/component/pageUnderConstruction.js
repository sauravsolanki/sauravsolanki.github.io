import React, { Component } from 'react';

import { Row, Col, Typography, Image } from 'antd';
import underConstruction from '../image/underConstruction.png'

const { Title } = Typography;

// Page under COnstruction
export const dummyUnderConstructionData = [
    {
        img: underConstruction,
        title: "Appointment"
    }
]

export function PageUnderConstructionView(props) {
    return (
        <>
            <Row>
                <Title level={2}>{props.title}</Title>

                <Row>
                    <Image src={props.img} />
                </Row>
                <br />

            </Row>

        </>
    )
}
