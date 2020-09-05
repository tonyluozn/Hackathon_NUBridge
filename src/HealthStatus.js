import React, {Component} from "react";
import {Checkbox, Row, Col} from 'antd';

function onChange(checkedValues){
    console.log('checked = ', checkedValues);
}
ReactDOM.render(
    <h1> If you identify yourself having any of the symptoms, please check below</h1>
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
    </Checkbox.Group>,
    mountNode,
);
//const OPTIONS = ["Fever", "Cough", "difficulty breathing", "Fatigue", "Muscle or body aches", "Headache", "New loss of taste or smell", "Sore throat", "Congestion or runny nose", "Nausea", "Diarrhea"]


