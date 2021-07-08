import React from "react";
import Login from "../../pages/login";
import User from "../../pages/perfil-user";
import Home from "../../pages/home";
import ServiceOrder from "../../pages/service-order";
import { Switch, Route } from "react-router-dom";
import Ranking from "../../pages/ranking";
import Complaint from "../../pages/complaints";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/ranking">
          <Ranking />
        </Route>
        <Route exact path="/profile/:userId">
          <User />
        </Route>
        <Route exact path="/services/:userId">
          <ServiceOrder />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/complaints">
          <Complaint />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
