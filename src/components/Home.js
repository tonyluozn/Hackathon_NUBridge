import React, { useState, useEffect } from "react";
import {MyComponent} from '../Map';
import { Card, Row, Col, Button,Tag,Divider,Tabs,Checkbox,List } from 'antd';
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
const drawerData = [
    {
      location:"North Campus",
      good:true,
      people:5,
      hour:0.5,
    },
    {
        location:"South Campus",
        good:false,
        people:5,
        hour:1,
      },
      {
        location:"Northeast Campus",
        good:true,
        people:5,
        hour:1,
      },
      {
        location:"West Campus",
        good:true,
        people:5,
        hour:2,
      },
      {
        location:"West Campus",
        good:false,
        people:5,
        hour:3,
      },
      {
        location:"Gillson Park Area",
        good:true,
        people:5,
        hour:3,
      },
      {
        location:"Downtown Evanston",
        good:false,
        people:5,
        hour:4,
      },
      
      {
        location:"North Campus Area",
        good:true,
        people:5,
        hour:5,
      },
]

const Map = () =>{
    return (
        <Row>
        <Col span={18}>
        <MyComponent/>
        </Col>
        <Col span={6}>
        <div className="newsList">
          <List
            dataSource={drawerData}
            renderItem={item => (
              <List.Item key={item.id}>
                <Col>
                  <Row>
                    <Col><Tag color={item.good?"#2BD784 ":"#E64141"}>Area News</Tag></Col>
                    <Col offset={5}><p className="minute_text">{item.hour} HOURS AGO</p></Col>
                    </Row>
                <Row>
                    {item.good?
                    <p><a className="div-link" href="https://www.google.com/" target="_blank" >
                    {item.location}</a> has not been reported for one day. It's temporaly considered safe.</p>
                    :
                    <p><a className="div-link" href="https://www.google.com/" target="_blank" >
                   {item.location}</a> has been reported by {item.people} people. Reduce traffic to this region.</p>}
                
                </Row>
                </Col>
              </List.Item>
            )}
          >
          </List>
          </div>

        </Col>
    </Row>
    
    );
};


const HealthStatus = () =>{
    return (
        <div className="scrolling-wrapper">
        <p className="header">Your Health Status History</p>
        <br/>
        <Row>
        <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#2BD784"}}>Normal</p>
                    <p className="date">2020/9/6</p>
                    </Card>
                    <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#2BD784"}}>Normal</p>
                    <p className="date">2020/9/5</p>
                    </Card>
                    <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#E64141"}}>Warning</p>
                    <p className="date" >Specific symptoms: Coughing</p>
                    <p className="date">2020/9/4</p>
                    </Card>
                    <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#2BD784"}}>Normal</p>
                    <p className="date">2020/9/3</p>
                    </Card>
                    <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#2BD784"}}>Normal</p>
                    <p className="date">2020/9/2</p>
                    </Card>
                    <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#2BD784"}}>Normal</p>
                    <p className="date">2020/9/1</p>
                    </Card>
                    <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#E64141"}}>Warning</p>
                    <p className="date" >Risky behaviour: large gathering</p>
                    <p className="date">2020/8/31</p>
                    </Card>
                    <Card hoverable title="Health Status" className="Card" boardered ={true}>
                    <p className="name">Name: Tony Luo</p>
                    <p className="status" style={{color:"#2BD784"}}>Normal</p>
                    <p className="date">2020/8/30</p>
                    </Card>

        </Row>
                   
    
        </div>
        

    
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
            <HealthStatus/>
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
