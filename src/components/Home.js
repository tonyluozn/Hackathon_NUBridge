import React, { useState, useEffect } from "react";
import {MyComponent} from '../Map';
import { Card, Row, Col, Button,Tag,Divider,Tabs,Checkbox } from 'antd';
import "./Home.css";
import HealthInput from './HealthInput';

// import { createFromIconfontCN } from '@ant-design/icons';

// const MyIcon = createFromIconfontCN({
//   scriptUrl: 'at.alicdn.com/t/font_b22ryr2vvoq.js', // 在 iconfont.cn 上生成

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
  
  // return (
  //     <div>
  //       <Home />
  //     </div>
  // )
   
   const { TabPane } = Tabs;
  //  <Home />
   function callback(key) {
        console.log(key);
   }
   function onChange(checkedValues){
    console.log('checked = ', checkedValues);
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
            {/* <h1> If you identify yourself having any of the symptoms, please check below</h1>
    <Checkbox.Group style = {{ width: '100%' }} onChange = {onChange}>
        <Row>
            <Col span = {8}>
                <Checkbox value = "Fever">Fever</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Cough">Cough</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "difficulty breathing">difficulty breathing</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Fatigue">Fatigue</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Muscle or body aches">Muscle or body aches</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Headache">Headache</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "New loss of taste or smell">New loss of taste or smell</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Sore throat">Sore throat</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Congestion or runny nose">Congestion or runny nose</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Nausea">Nausea</Checkbox>
            </Col>
            <Col span = {8}>
                <Checkbox value = "Diarrhea">Diarrhea"</Checkbox>
            </Col>
        </Row>
        </Checkbox.Group>   */}
            
            </TabPane>
        </Tabs>
      </div>

  );
}
