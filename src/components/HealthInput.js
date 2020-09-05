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

             <br/><br/><Button type="primary" style={{height: 40, width:120}}>Submit</Button>
    
          </>
        );
  
  };

  export default HealthInput;
