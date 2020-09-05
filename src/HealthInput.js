import React from 'react';
import { Row, Col, Button, Input, Radio, Divider } from 'antd';


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
      
      const plainOptions3 = ["Fever", "Cough", "difficulty breathing", "Fatigue", "Muscle or body aches", "Headache", "New loss of taste or smell", "Sore throat", "Congestion or runny nose", "Nausea", "Diarrhea"]
      const [step3_state, setStep3_state] = React.useState('none');
      const onChange_step3 = e => {
        console.log('radio3 checked', e.target.value);
        setStep3_state(e.target.value);
      };
      return (
            <>
             <h1>
             Your Health Update Form
             </h1>
             <Row gutter={[,36]} >
               <Col span={2} offset={0.5}>
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
               <Col span={2} offset={0.5}>
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

             {/* {step_space}
             <Row gutter={[,36]}>
               <Col span={2} offset={0.5}>
               {step_icon("3")}
               </Col>
               <Col span={10}><p className="title">If you identify yourself having any of the symptoms, please check below</p>
               <Radio.Group options={plainOptions} onChange={onChange_step3} value={step3_state} />
                <br />
               </Col>
             </Row>
             <div style={{width:1000}}>
             <Divider orientation="left" ></Divider>
             </div> */}
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
    </Checkbox.Group>
             <br/><br/><Button type="primary" style={{height: 40, width:120}}>Submit</Button>
    
          </>
        );
  
  };

  export default HealthInput;
