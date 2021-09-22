import React from "react";
import {
  Button,
  Container,
  Menu,
  Image,
  Dropdown,
  Search,
} from "semantic-ui-react";
import LogoPicture from "../images/NewPic.png";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="tiny"
              src={LogoPicture}
              style={{ marginRight: "1.5em" }}
            />
            HRMS
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
          <Menu.Item name="account" />
          <Menu.Item name="settings" />
          <Dropdown item text="Display Options">
            <Dropdown.Menu>
              <Dropdown.Header>Text Size</Dropdown.Header>
              <Dropdown.Item>Small</Dropdown.Item>
              <Dropdown.Item>Medium</Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as="a" style={{ marginLeft: "7em" }}>
            <Search placeholder="Search" />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="red">Sign Up</Button>
            </Menu.Item>
            <Menu.Item>
              <Button color="blue">Sign In</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
