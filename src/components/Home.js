import React, { useState, useEffect } from "react";
import {MyComponent} from '../Map';
import { Card, Row, Col, Button,Tag,Divider,Tabs } from 'antd';
import "./Home.css";

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};


export default function Home(props) {
  return (
      <div className="page">
      <p>what'</p>
      <Row>
          <Col span={16}>
          <MyComponent/>
          </Col>
          <Col span={8}>
          <Card>haha</Card>

          </Col>
      </Row>
      

      </div>

  );
}
