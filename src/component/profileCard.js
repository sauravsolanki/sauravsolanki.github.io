import React, { Component }  from 'react';

import { Card, Avatar } from 'antd';
import { EditOutlined, MoreOutlined, AccountBookOutlined } from '@ant-design/icons';
import profileImg from '../image/profile.jpg';


const { Meta } = Card;


export const dummyProfileDataSource = [{
    image: profileImg,
    title: "Mr. John Diecasco",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
       incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco la"
},
{
    image: profileImg,
    title: "Mr. John Diecasco",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
       incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco la"
},
{
    image: profileImg,
    title: "Mr. John Diecasco",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
       incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco la"
},
{
    image: profileImg,
    title: "Mr. John Diecasco",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
       incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco la"
}
]

export function ProfileCardView(props) {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={props.image}
                    style={{ borderRadius: '50%' }}
                />
            }
            actions={[
                <EditOutlined key="edit" />,
                <AccountBookOutlined key="account" />,
                <MoreOutlined key="more" />
            ]}
        >
            <Meta
                avatar={<Avatar src={props.image} />}
                title={props.title}
                align="left"
                description={props.description}
            />
        </Card>
    )
}
