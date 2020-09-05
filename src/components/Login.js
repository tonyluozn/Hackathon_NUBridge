import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import MyComponent from '../Map'
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} style={{backgroundColor:"#0D6EF1"}} type="submit">
          Login
        </Button>
      </form>
      <MyComponent></MyComponent>
    </div>
  );
}

export default Login;