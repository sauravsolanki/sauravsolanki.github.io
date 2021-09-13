import React, { Component } from 'react';

import { Layout, Menu, Typography } from 'antd';
import { HomeOutlined, CodeOutlined, DatabaseOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;
const { Title } = Typography;

export function SiderView() {
    return (
        <Sider width={250}
            className="site-layout-background"
            style={{
                height: '100vh',
                position: 'fixed',
                left: 0,
                // height: '100%',
            }}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['home', 'cvproject', 'nlpproject', 'mlproject']}
                style={{ height: '100%', borderRight: 0, backgroundColor: '#fafafa' }}
            >
                <SubMenu key="home" icon={<HomeOutlined />} title="About Saurav" style={{ backgroundColor: '#fafafa' }}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About me</Menu.Item>
                    <Menu.Item key="3">Overview on Projets</Menu.Item>
                    {/* <Menu.Item key="4">Work Experience</Menu.Item>
                    <Menu.Item key="5">Skill-set</Menu.Item> */}
                </SubMenu>

                <SubMenu key="cvproject" icon={<DatabaseOutlined />} title="Computer Vision Project" style={{ backgroundColor: '#fafafa' }}>
                    <Menu.Item key="6">Vehicle Detection in the wild</Menu.Item>
                    <Menu.Item key="7">Crack Detection</Menu.Item>
                    <Menu.Item key="8">Wheat Detection</Menu.Item>
                    <Menu.Item key="9">Image Classification</Menu.Item>
                    <Menu.Item key="10">Face Recognition</Menu.Item>
                    <Menu.Item key="11">Image Captioining</Menu.Item>
                    <Menu.Item key="12">Lane Detection</Menu.Item>
                    <Menu.Item key="13">PixelLink</Menu.Item>
                </SubMenu>

                <SubMenu key="nlpproject" icon={<DatabaseOutlined />} title="NLP Project" style={{ backgroundColor: '#fafafa' }}>
                    <Menu.Item key="20">Recruitment Engine</Menu.Item>
                    <Menu.Item key="21">Music Generation</Menu.Item>
                    <Menu.Item key="22">Sentiment Analysis</Menu.Item>
                    <Menu.Item key="23">Twitter Bot Detection</Menu.Item>
                    <Menu.Item key="24">Face Recognition</Menu.Item>
                </SubMenu>

                <SubMenu key="mlproject" icon={<DatabaseOutlined />} title="ML Project" style={{ backgroundColor: '#fafafa' }}>
                    <Menu.Item key="30">Predict Weather</Menu.Item>
                    <Menu.Item key="31">Adopt a Pet</Menu.Item>
                    <Menu.Item key="32">Calculate airplane accident severity</Menu.Item>
                </SubMenu>

            </Menu>
        </Sider>
    )
}