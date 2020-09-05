import React, { useState, useEffect } from "react";
import {MyComponent} from '../Map';
import { Card, Row, Col, Button,Tag,Divider,Tabs } from 'antd';
import "./Home.css";
import HealthInput from './HealthInput';

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

const Map = () =>{
    return (
        <Row>
        <Col span={16}>
        <MyComponent/>
        </Col>
        <Col span={8}>
        <Card hoverable title="Area Ratings" className="Card" boardered ={true}>haha</Card>

        </Col>
    </Row>
    
    );
};

export default function Home(props) {

   
   const { TabPane } = Tabs;
   function callback(key) {
        console.log(key);
   }

  return (
      <div className="page">

      <br/>
      <Tabs onChange={callback} type="card">
            <TabPane tab="Map" key="1">
            <Map/>
            </TabPane>
            <TabPane tab="Health Status" key="2">
               
            </TabPane>
            <TabPane tab="Status update" key="3">
            <HealthInput/>
            </TabPane>
        </Tabs>
      </div>

  );
}
