import React, { Component }  from 'react';

import Page404Img from '../image/page404.png'
import { Col, Row, Typography } from 'antd'
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

export default function Page404View() {
    return (
        <Row justify="center" align="middle">
            <Col span={8}>

                <Row justify="space-between" align="stretch">

                    <Col span={24}>
                        <Title level={2} style={headerTextStyle}>
                            Sorry,
                            This Page is not Available
                        </Title>

                    </Col>

                    <Col span={24}>
                        <a>

                            <Title level={6} style={backtextStyle}>
                                {"<<"} Back to Prev Page
                            </Title>
                        </a>
                    </Col>

                </Row>
            </Col>

            <Col span={16}>
                <img src={Page404Img} />

            </Col>

        </Row >

    )
}