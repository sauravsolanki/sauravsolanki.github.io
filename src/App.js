import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import LoginPage from './component/login';
import Home from './component/home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';

// import store from './reducers';

import { Layout, Menu, Row, Col, Image, Typography } from 'antd';

// ---------------------------------------
// import { HomeNumberSummaryCard, dataBlock } from './component/numberCard';

// import { TableDataView, dummyDataTableColumns, dummyDataTableSource } from './dataTable'

// import { ProfileCardView, dummyProfileDataSource } from './profileCard';

// import { TagsStackView, dummyTagsData } from './tagData';

// import { PageUnderConstructionView, dummyUnderConstructionData } from './pageUnderConstruction';

// import { HeaderView } from './header';

import { SiderView } from './component/sider';
import Appointment from './component/appointment';
import { HeaderView } from './component/header';
import ProjectView from './component/viewProject'
// ---------------------------------------
// import all images
// import chart1 from '../image/HospitalSurvey.png'
// import chart2 from '../image/Income.png'
// ---------------------------------------
const { SubMenu } = Menu;
const { Footer, Sider, Content } = Layout;
const { Title } = Typography;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validToken: false,
      authComplete: false
    };
  }

  render() {
    return (
      // <Provider>
      <Layout>

        <SiderView />

        <Layout style={{ marginLeft: 250, padding: '20px' }}>
          {/* Search Bar and Avatar */}
          <HeaderView />

          <Content>
            <Row gutter={[8, 8]}>
              <Router>
                <Switch>

                  <Route path="/dashboard">
                    {/* <Dashboard /> */}
                  </Route>

                  <Route path="/login">
                    {/* <Login /> */}
                  </Route>


                  <Route path="/">
                    {/* <Home /> */}

                    {/* <Appointment /> */}

                    <ProjectView />

                  </Route>

                </Switch>
              </Router>
            </Row>

            <Footer style={{
              textAlign: 'center',
              alignItems: 'flex-start',
              position: 'absolute',
              bottom: '0',
              left: 250,
              width: '89.2%',
              height: '70px'
            }}>Made with ❤️ by Saurav Solanki © 2021 </Footer>

          </Content>




          {/* <Footer style={{
              textAlign: 'center',
              position: 'fixed',
              // height: '70px',
              // bottom: '0',
              // left: '0',
              // right: '0',
              // marginBottom: '0'

            }}>IHMS ©2021 Made with ❤️ by Saurav Solanki </Footer>

 */}



        </Layout>

      </Layout>

      // </Provider>
    );
  }
}

export default App;
