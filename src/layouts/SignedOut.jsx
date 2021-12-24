import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Menu position="right" style={{ marginTop: "1em" }}>
        <Menu.Item>
          <Button onClick={signIn} as={NavLink} to="/login"  color="blue">
            Sign In
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as={NavLink} to="/signup" color="red">Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </div>
  );
}
