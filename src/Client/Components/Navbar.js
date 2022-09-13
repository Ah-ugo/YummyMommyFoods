import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { CloseOutlined } from "@ant-design/icons";
// import { Text } from "@chakra-ui/react";
import Herobg from "../Assets/banner_bg.jpg";
import MomLogo from "../Assets/YummyMommy.png";

export default function NavbarComponent() {
  return (
    <div className="" style={{}}>
      <Navbar
        style={{
          background: "#1AC073",
          // background: `url(${Herobg})`,
          color: "white",
        }}
        expand="lg"
        variant="dark"
        fixed="top"
        className="">
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ color: "white", fontFamily: "Roboto" }}>
            {/* YummyMommy */}
            {/* <img
              src={MomLogo}
              alt="YummyMummy"
              style={{ color: "white", width: "200px" }}
            /> */}
            YummyMommy
            {/* <Text
              style={{
                // fontFamily: "Squada One",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "32px",
                letterSpacing: "-0.012em",

                color: "#FFFFFF",
              }}>
              YummyMommy
            </Text> */}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            style={{ border: "none", boxShadow: "none", color: "white" }}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            style={{ background: `#1AC073`, color: "white" }}
            variant="dark"
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end">
            <Offcanvas.Header
              closeButton={
                <CloseOutlined style={{ color: "black" }} color="white" />
              }
              variant="light"
              color="dark">
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand`}
                variant="dark"
                style={{ color: "white" }}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{ color: "black", alignItems: "center" }}>
                <Nav.Link
                  href="#action1"
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.012em",
                  }}>
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.012em",
                  }}>
                  About
                </Nav.Link>
                <Nav.Link
                  href="#"
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.012em",
                  }}>
                  Menu
                </Nav.Link>
                <Nav.Link
                  href="#"
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.012em",
                  }}>
                  Order
                </Nav.Link>
                <Nav.Link
                  href="#"
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.012em",
                  }}>
                  Login
                </Nav.Link>
                <Nav.Link
                  href="#"
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.012em",
                  }}>
                  Register
                </Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
