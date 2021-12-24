import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import {
  Button,
  Container,
  Menu,
  Image,
  Dropdown,
  Search,
} from "semantic-ui-react";
import LogoPicture from "../images/NewPic.png";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   const history = useHistory();
    function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/home")
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/home" header >
            <Image
              size="tiny"
              src={LogoPicture}
              style={{ marginRight: "1.5em" }}
            />
            HRMS
          </Menu.Item>
          

          <Menu.Item as={NavLink} to="/jobs" name="Jobs" />
          <Menu.Item name="CV" />
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

          <Menu.Menu style={{ marginTop: "0.25em" }} position="centered">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
