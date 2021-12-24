import React from "react";
import { GridColumn } from "semantic-ui-react";
import JobAdvertisementsList from "../pages/JobAdvertisementsList";
import JobPositionsList from "../pages/JobPositionsList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";

export default function Dashboard() {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/jobadvertisements/:id" component={JobAdvertisementDetail}/> 
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            {<Route exact path="/jobs" component={JobPositionsList} />}
          </GridColumn>
          <GridColumn width={12}>
           
            <Route exact path="/jobs" component={JobAdvertisementsList} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
