import React, { Component } from 'react';
import { Row, Col, Typography, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
export default function ProjectView() {
    return (

        <Typography style={{ backgroundColor: '#fff', padding: '40px' }}>
            <Title>Vehicle Detection in the Wild</Title>
            <Paragraph>
                <Text strong>Abstract:</Text>
                Object Recognition can solve many real-world problems around us but the current research in ML Domain happens
                to be focused on dataset that is standardised, clear and clean. In the Indian scenario context, there is a lot of uncertainty that
                we counter with because of non-standard practices that add more real challenge to understanding the scene, for better decision making.
                Example: Imagine a crowded two lane road in a metropolitan city. You will see lots of objects and its complex relationship in scene.
                All these interlinked relations makes it really hard to make decisions. #research #problemsolving.

                For better understanding of task, I have trained MaskRCNN-Model and created dataset from scratch using cvat tools. I am able to achieve 0.54 mAP.

            </Paragraph>

            <Divider />

            <Paragraph>
                <Text strong>Dataset:</Text>
                <ol>
                    <li> Make a 3 video in busy city of Bangalore, keeping mobile camera in hand over a bike. Got around: 15000 Image. 
                        After cleaning and clearing, It concludes to 6000 Images</li>
                    <li> Load the Data in CVAT and Annotation it with auto-annotation model and track feature of tools. It takes around 1 hours to get 1000 Images</li>
                    <li> Exported in label-me format</li>
                </ol>


                <Text strong> Model: Matterport MaskRCNN </Text>
                <ol>
                    <li> Make a 3 video in busy city of Bangalore, keeping mobile camera in hand over a bike. Got around: 15000 Image. 
                        After cleaning and clearing, It concludes to 6000 Images</li>
                    <li> Load the Data in CVAT and Annotation it with auto-annotation model and track feature of tools. It takes around 1 hours to get 1000 Images</li>
                    <li> Exported in label-me format</li>
                </ol>


            </Paragraph>

            <Paragraph>
                <Text strong>Approach:</Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>

            <Divider />

            <Paragraph>
                <Text strong>Result:</Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Divider />
            <Paragraph>
                <Text strong>Conclusion:</Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>

        </Typography>


    )
}