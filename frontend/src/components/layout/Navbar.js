import React, { useState } from "react";
import { Button } from "styled-button-component";
import { Navbar, NavbarLink } from "styled-navbar-component";
import { Nav } from "styled-nav-component"; 
const NavbarPage = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <Navbar expandSm light>
      <Nav start>
        <NavbarLink light brand href="/">
          Home
        </NavbarLink>
        <Nav end>
          <Button
            light
            outline
            toggleCollapse
            expandSm
            onClick={() => setHidden(!hidden)}
          >
            <span>&#9776;</span>
          </Button>
        </Nav>
      </Nav>
      <Nav start collapse expandSm hidden={hidden}>
        <NavbarLink light href="/Shop">
          Shop
        </NavbarLink>
        <NavbarLink light href="/Blog">
          Blog
        </NavbarLink>
        <NavbarLink light href="/Content">
          Content
        </NavbarLink>
        <NavbarLink light disabled href="/Forum">
          Forum
        </NavbarLink>
      </Nav>
    </Navbar>
  );
};

export default NavbarPage;
