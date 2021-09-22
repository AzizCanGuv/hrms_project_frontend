import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
import LogoPicture from "../images/NewPic.png";

export default function Footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: "10em 0em 0em", padding: "3.5em 0em" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable style={{ marginBottom: "3.5em" }}>
            <Grid.Column width={3}>
              <Header inverted as="h3" content="About Us" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h3" content="For Employees" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h3" content="For Job Seekers" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Footer Header" />
              <p>Somethings will be added to here</p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image centered size="tiny" src={LogoPicture} />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
