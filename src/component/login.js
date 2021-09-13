import React, { Component }  from 'react';

import { Row, Col, Tabs } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import logoHome from '../image/logoHome.png';
import { GoogleLogin } from 'react-google-login';
import UserLogin from './userlogin';
import { Typography,Divider } from 'antd';
const { Paragraph, Title } = Typography;

const responseGoogle = (response) => {
    console.log(response);
}


const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}


function LoginPage() {
    return (
        <>
            <Row align="middle" justify="center" style={{ height: '80%', width: '50%', margin: "auto",marginTop:60 }}>

                <Col span={12}>
                    {/* Company Name and Logo */}
                    <Row>
                        <Title level={2} style={{ color: "#3751FE" }}>Intelligent Health Monitoring  System</Title>
                        <Paragraph>Manage your Health better.</Paragraph>
                       
                    </Row>
                   
                    <br/> <br/>
                    {/* Username and Password Login */}
                    <Row align="middle" justify="center">
                        <Paragraph>Welcome  back! Please login to your account.</Paragraph>
                        <UserLogin />
                    </Row>
                    
                    <Divider />

                    <Row align="middle" justify="center">
                        <GoogleLogin
                            clientId="141417665774-s6mufip72e5p3qqcisf53pfhbcicu9uo.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Row>

                </Col>


                {/* Right Part: Logo and Tab */}
                <Col span={12} style={{ backgroundColor: "#E5E5E580" }}>

                    {/* TAB */}
                    <Row style={{ padding: 40 }}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Home" key="1">
                                Content of Home .....
                            </TabPane>
                            <TabPane tab="About Us" key="2">
                                Content of About us ....
                            </TabPane>
                            <TabPane tab="Blog" key="3">
                                Content of Blogging goes here ...
                            </TabPane>
                        </Tabs>
                    </Row>

                    {/* LOGO goes here .... */}
                    <Row>
                        <Col span={24}>
                            <img src={logoHome} alt="IMAGE NOT LOADED" style={{ transform: "rotate(-10deg)" }} />
                        </Col>
                    </Row>


                </Col>
            </Row>
        </>
    );
}

export default LoginPage;