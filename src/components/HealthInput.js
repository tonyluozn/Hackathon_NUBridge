import React from 'react';
import { Row, Col, Button, Input, Radio, Divider, Checkbox } from 'antd';


const HealthInput = () =>{

    function step_icon(label) {
      return (<><div className="circle" > {label}</div><p className="circle-text">step</p></>);
    }
    function step_space() {
      return (<Row gutter={[8,36]} ><Col flex={5}></Col></Row>);
    }
  
      const plainOptions = ['Yes, more than twice', 'twice', 'once', 'none'];
      const [step2_state, setStep2_state] = React.useState('none');
      const onChange_step2 = e => {
        console.log('radio2 checked', e.target.value);
        setStep2_state(e.target.value);
      };

      const plainOptions5 = ['Positive', 'Negative'];
      const [step5_state, setStep5_state] = React.useState('none');
      const onChange_step5 = e => {
        console.log('radio5 checked', e.target.value);
        setStep5_state(e.target.value);
      };
     

      return (
            <>
             <h1>
             Your Health Update Form
             </h1>
             <Row gutter={[,36]} >
               <Col span={2} offset={1}>
                {step_icon("1")}
               <step_icon label="1"/>
               </Col>
               <Col span={10}>
               <p className="title">Enter your body temperature</p>
                <Input  placeholder="36.5 C" size='large'  style={{ width: 400 }}/>
              <p>Measure your temperature in C.</p>
               </Col>
              
             </Row>
             <div  style={{width:1000}}>
             <Divider orientation="left" ></Divider>
             </div>
    
             {step_space}
             <Row gutter={[,36]}>
               <Col span={2} offset={1}>
               {step_icon("2")}
               </Col>
               <Col span={10}><p className="title">Have you been to large gathering today?</p>
               <Radio.Group options={plainOptions} onChange={onChange_step2} value={step2_state} />
                <br />
               </Col>
             </Row>
             <div  style={{width:1000}}>
             <Divider orientation="left" ></Divider>
             </div>

              {step_space}
             <Row gutter={[,36]}>
               <Col span={2} offset={1}>
               {step_icon("3")}
               </Col>
               <Col span={10}><p className="title">If you identify yourself having any of the symptoms, please check below</p>
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
                <Checkbox value = "Diarrhea">Diarrhea</Checkbox>
            </Col>
              
               </Col>
             </Row>
             <div style={{width:1000}}>
             <Divider orientation="left" ></Divider>
             </div>

             {step_space}
             <Row gutter={[,36]}>
               <Col span={2} offset={1}>
               {step_icon("4")}
               </Col>
               <Col span={10}><p className="title">Did you get a coronavirus test in the past 14 days?</p>
               <Checkbox value = "Yes">Yes</Checkbox>
               <Checkbox value = "No">No</Checkbox>
                <br />
               </Col>
             </Row>
             <div style={{width:1000}}>
             <Divider orientation="left" ></Divider>
             </div>

             {step_space}
             <Row gutter={[,36]}>
               <Col span={2} offset={1}>
               {step_icon("5")}
               </Col>
               <Col span={10}><p className="title">If yes, what's the result?</p>
               <Radio.Group options={plainOptions5} onChange={onChange_step5} value={step5_state} />
              <br />
                <br />
               </Col>
             </Row>
             <div style={{width:1000}}>
             <Divider orientation="left" ></Divider>
             </div>
             <br/><br/><Button type="primary" style={{height: 40, width:120}}>Submit</Button>
    
          </>
        );
  
  };

  export default HealthInput;
