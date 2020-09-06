import React, { useState } from "react";
import {
  FormText,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";
import { useFormFields } from "./hooksLib";
import { Row, Col, Input, Radio, Divider, Checkbox } from 'antd';
import "./Signup.css";

function Signup(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <FormLabel>Confirmation Code</FormLabel>
          <FormControl
            autoFocus
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
          <FormText>Please check your email for the code.</FormText>
        </FormGroup>
        <Button
          block
          type="submit"
          disabled={isLoading||!validateForm()}
        >
          Signup
        </Button>
      </form>
    );
  }
  const plainOptions = ['Student', 'Staff', 'Professor', 'Resident'];
  const [step_state, setStep_state] = React.useState('none');
  const onChange_step = e => {
    console.log('radio checked', e.target.value);
    setStep_state(e.target.value);
  };
  function renderForm() {
    return (
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </FormGroup>
        <FormGroup controlId="DormName" bsSize="large">
          <FormLabel>Dorm Name</FormLabel>
          <FormControl
            type="DormName"
            onChange={handleFieldChange}
          />
        </FormGroup>
        <Col span={10}><p className="title">How do you identify yourself?</p>
        <Radio.Group options={plainOptions} onChange={onChange_step} value={step_state} />
        </Col>
        <br></br>
        <Button
          block
          type="submit"
          disabled={isLoading||!validateForm()}
        >
          Signup
        </Button>
      </form>
    );
  }

  return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}

export default Signup;