import React, { Component }  from 'react';

import maintainanceImg from '../image/maintainance.png'
import { Row, Col, Typography } from 'antd'
const { Title } = Typography
const headerTextStyle = {
    position: 'absolute',
    width: '388px',
    height: '327px',
    fontFamily: 'Cagliostro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '70px',
    lineHeight: '80px',
    textAlign: 'center',
    letterSpacing: '5px',
    textIndent: '2px',
    color: '#098AFD',
    marginLeft: '100px'
}
const backtextStyle = Object.assign({}, headerTextStyle, { fontSize: '14px', bottom: 0, position: "absolute" })


export default function UnderMaintainanceView() {
    return (
        <Row justify="center" align="middle">
            <Col span={6}>
                <a>
                    <Title level={6} style={backtextStyle}>
                        {"<<"} Back to Prev Page
                    </Title>

                </a>
            </Col>

            <Col span={18}>
                <img src={maintainanceImg} />
            </Col>

        </Row>

    )
}