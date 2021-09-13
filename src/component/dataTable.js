
import React, { Component }  from 'react';

import { Row, Col, Typography, Table } from 'antd';
const { Title } = Typography;

// for table
export const dummyDataTableSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
        email: 'abcemail@gmail.com',
        visittime: '11:30 am',
        doctor: 'Dr. XYX X',
        condition: 'Stomache'
    },
    {
        key: '2',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
        email: 'abcemail@gmail.com',
        visittime: '11:30 am',
        doctor: 'Dr. XYX X',
        condition: 'Stomache'
    }, {
        key: '3',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
        email: 'abcemail@gmail.com',
        visittime: '11:30 am',
        doctor: 'Dr. XYX X',
        condition: 'Stomache'
    }, {
        key: '4',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
        email: 'abcemail@gmail.com',
        visittime: '11:30 am',
        doctor: 'Dr. XYX X',
        condition: 'Stomache'
    },

];

export const dummyDataTableColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 200
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 50
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 400
    },
    {
        title: 'Visit Time',
        dataIndex: 'visittime',
        key: 'visittime',
        width: 200
    },
    {
        title: 'Doctor',
        dataIndex: 'doctor',
        key: 'doctor',
        width: 200
    },
    {
        title: 'Condition',
        dataIndex: 'condition',
        key: 'condition',
        width: 400
    }
];


export function TableDataView(props) {
    return (
        <Row>
            <Title level={2} align="left"> {props.title} </Title>
            <Table columnWidth={80} dataSource={props.dataSource} columns={props.columns} />
        </Row>
    )
}