import React from "react";
import { Button, Form, Grid, Image,Icon } from "semantic-ui-react";
import LogoPicture from "../images/NewPic.png";

export default function SignUp() {
  return (
    <div>
      <Grid>
        <Grid.Column width={8} centered style={{ margin: "5em 0em 5em 20em" }}>
          <Image
            centered
            size="small"
            src={LogoPicture}
            style={{ marginTop: "1em" }}
          />
          <Form style={{ marginTop: "2em" }}>
            <Form.Group widths="equal">
              <Form.Input
                icon="user"
                iconPosition="left"
                fluid
                placeholder="Name"
              />
              <Form.Input
                icon="user plus"
                iconPosition="left"
                fluid
                placeholder="Surname"
              />
            </Form.Group>
            <Form.Input
              icon="envelope"
              iconPosition="left"
              placeholder="Email"
            />
            <Form.Group widths="equal">
              <Form.Input
                icon="lock"
                iconPosition="left"
                fluid
                placeholder="Password"
                type="password"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                fluid
                placeholder="Repeat Password"
                type="password"
              />
            </Form.Group>
            <Form.Input
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
            />
            <Form.Input
              icon="address card"
              iconPosition="left"
              placeholder="National Identity"
            />
            <Form.Input
              icon="calendar alternate"
              iconPosition="left"
              placeholder="Please Enter Birth Date like 1999-08-25"
            />
            <Button icon color="red">
              <Icon name="sign in"/>
              Start To Jurney
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}
