import React, { useState, useEffect } from "react";
import { ListGroup, Button, Col, Row, Container } from "react-bootstrap";
import {MyComponent} from '../Map'
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
    <Container className="Home">
      
        <MyComponent></MyComponent>

    </Container>
  );
}
