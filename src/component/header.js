import React, { Component }  from 'react';

import { Row, Col, Avatar, Input, AutoComplete, Divider } from 'antd';
import profileImg from '../image/profile.jpg';
import { BellOutlined, AudioOutlined, UserOutlined } from '@ant-design/icons';

const renderTitle = (title) => (
    <span>
        {title}
        <a
            style={{ float: 'right' }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            more
        </a>
    </span>
);

const renderItem = (title, count) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {title}
            <span>
                <UserOutlined /> {count}
            </span>
        </div>
    ),
});

const options = [
    {
        label: renderTitle('Libraries'),
        options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
        label: renderTitle('Solutions'),
        options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
        label: renderTitle('Articles'),
        options: [renderItem('AntDesign design language', 100000)],
    },
];
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);


export function HeaderView() {

    return (
        <Row justify="start" align="middle" gutter={[0,0]}>

            <Col span={12}>
                <AutoComplete
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={500}
                    style={{ width: '100%' }}
                    options={options}
                >
                    <Input.Search size="large"
                        placeholder="input search text"
                        enterButton="Search"
                        allowClear={true}
                        suffix={suffix}
                        size="large" />
                </AutoComplete>
            </Col>

            <Col offset={10} span={2}>
                <Avatar icon={<BellOutlined />} style={{ marginRight: '20px' }} />
                <Avatar src={profileImg} />
            </Col>

            <Divider plain/>

        </Row>

    )
}