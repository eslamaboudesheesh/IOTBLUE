import React, { useState, useEffect } from "react";
import {  Nav, Navbar } from "react-bootstrap";
import Link from 'next/link'
import Image from 'next/image'

export default function MainNavbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, [scroll]);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        className={
          scroll ? "Header__navbar Header__magical " : "Header__navbar "
        }
      >
        <Navbar.Brand >
          <span className="px-2">IoTBlue</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="floot-right">
          <Link href="/" passHref={true}>
            <Nav.Link href="/" as="a" eventKey={1}>Home</Nav.Link>
            </Link>
            <Link href="/addUser" passHref={true}>
            <Nav.Link href="/addUser"  as="a" eventKey={2}>AddUser</Nav.Link>
            </Link>
           
          </Nav>

       
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
