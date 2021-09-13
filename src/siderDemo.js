import React from 'react';
import 'antd/dist/antd.css';
import "./App.css"
import { Layout, Menu, Breadcrumb } from 'antd';
import { HomeOutlined, DatabaseOutlined, CodeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function SiderDemo() {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Projects</Menu.Item>
                    <Menu.Item key="3">Contact</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="feature" icon={<HomeOutlined />} title="Features">
                                <Menu.Item key="1">Home</Menu.Item>
                                <Menu.Item key="2">Who Am I ?</Menu.Item>
                                <Menu.Item key="3">Resume</Menu.Item>
                                <Menu.Item key="4">Project Overview</Menu.Item>
                                <Menu.Item key="5"> Contact me</Menu.Item>
                            </SubMenu>

                            <SubMenu key="project" icon={<DatabaseOutlined />} title="project">
                                <Menu.Item key="6">Patients</Menu.Item>
                                <Menu.Item key="7">Emergency</Menu.Item>
                                <Menu.Item key="8">Doctor</Menu.Item>
                                <Menu.Item key="9">Staff</Menu.Item>
                                <Menu.Item key="10">Ambulance</Menu.Item>
                                <Menu.Item key="11">Volunteer/NGO</Menu.Item>
                            </SubMenu>

                            <SubMenu key="contact" icon={<CodeOutlined />} title="Contact">
                                <Menu.Item key="12">Tech Team</Menu.Item>
                                <Menu.Item key="13">Help</Menu.Item>
                                <Menu.Item key="14">Blog</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>IHMS ©2021 Created by ❤️ Saurav Solanki</Footer>
        </Layout>
    );

}
export default SiderDemo;