import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import LogoPicture from "../images/NewPic.png";

export default function Login() {
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        style={{ marginTop: "15em" }}
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            <Image size="massive" src={LogoPicture} />{" "}
            <h1>Log-in to your account</h1>
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}
