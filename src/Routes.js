import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";


export default function Routes(appProps) {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} {...appProps} />}/>
        <Route exact path="/login" render={(props) => <Login {...props} {...appProps} />}/>
        <Route exact path="/signup" render={(props) => <Signup {...props} {...appProps} />}/>
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
        
      </Switch>
    );
  }