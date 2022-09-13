import React from "react";
import Hero from "../Components/Hero";
import { Flex, Text } from "@chakra-ui/react";
// import { TimePicker } from "antd";
import { Container, Col, Row, Form } from "react-bootstrap";
// import { Col, Row } from "antd";
// import MenuCards from "../Components/MenuCards";
import Herobg from "../Assets/banner_bg.jpg";
import Menu2Card from "../Components/Menu2Card";
import { Button, Fab } from "@mui/material";
import { BsWhatsapp } from "react-icons/bs";
import { Input } from "antd";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "Roboto" }}>
      <Hero />
      <div>
        <div
          style={{
            textAlign: "center",
            paddingTop: "105px",
            background: "white",
          }}>
          <Container>
            <Text style={{ fontSize: "30px", fontWeight: 700 }}>
              Our Popular Foods
            </Text>
            <Text
              style={{ fontSize: "16px", fontWeight: 300, color: "#181818" }}>
              Choose from over 30 craveable toppings to make your perfect Food.
            </Text>
            <Text
              style={{ fontSize: "16px", fontWeight: 300, color: "#181818" }}>
              Don’t love what you ordered? Let us know. We’re all about second
              chances.
            </Text>
          </Container>
          <div style={{ background: "white" }}>
            <Container>
              <Row style={{ gap: "" }}>
                <Col lg={4} sm={12} style={{ marginBottom: "20px" }}>
                  <Menu2Card
                    img={Herobg}
                    foodname="Beans And Plantain"
                    foodprice={`₦ ${3000}`}
                    time={"50-79 mins"}
                  />
                </Col>
                <Col lg={4} sm={12} style={{ marginBottom: "20px" }}>
                  <Menu2Card
                    img={Herobg}
                    foodname="Rice And Beans"
                    foodprice={`₦ ${3000}`}
                    time={"50-79 mins"}
                  />
                </Col>
                <Col lg={4} sm={12} style={{ marginBottom: "20px" }}>
                  <Menu2Card
                    img={Herobg}
                    foodname="Roasted Plantain And Ugba"
                    foodprice={`₦ ${3000}`}
                    time={"50-79 mins"}
                  />
                </Col>
                <Col lg={4} sm={12} style={{ marginBottom: "20px" }}>
                  <Menu2Card
                    img={Herobg}
                    foodname="Fried Rice And Chicken"
                    foodprice={`₦ ${3000}`}
                    time={"50-79 mins"}
                  />
                </Col>
                <Col lg={4} sm={12} style={{ marginBottom: "20px" }}>
                  <Menu2Card
                    img={Herobg}
                    foodname="Fried Rice And Chicken"
                    foodprice={`₦ ${3000}`}
                    time={"50-79 mins"}
                  />
                </Col>
                <Col lg={4} sm={12} style={{ marginBottom: "20px" }}>
                  <Menu2Card
                    img={Herobg}
                    foodname="Fried Rice And Chicken"
                    foodprice={`₦ ${3000}`}
                    time={"50-79 mins"}
                  />
                </Col>
                <Container style={{ marginBottom: "20px" }}>
                  <Button
                    variant="outlined"
                    style={{
                      color: "#1AC073",
                      border: "1px solid #1AC073",
                      float: "",
                    }}>
                    See More
                  </Button>
                </Container>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Fab
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 10,
          background: "#1AC073",
        }}>
        <BsWhatsapp style={{ color: "white", fontSize: "24px" }} />
      </Fab>
      <main style={{ background: "#F7F8FA" }}>
        <Container style={{ paddingTop: "50px" }}>
          <Row>
            <Col lg={6} sm={12}>
              <Text
                style={{
                  fontSize: "24px",
                  lineHeight: "24px",
                  /* or 100% */

                  letterSpacing: "-0.012em",
                }}>
                Do you have a question <br /> or want to become a seller?
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#1B1C21",
                  letterSpacing: "-0.012em",
                  fontWeight: 400,
                }}>
                Fill this form and our manager will contact you in the next 1
                hour.
              </Text>
              <Form>
                <Flex className="d-block d-lg-flex d-xl-flex">
                  <Form.Group
                    className="mb-3"
                    style={{ paddingRight: "10px" }}
                    controlId="formBasicEmail">
                    {/* <Form.Label>Your Name</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      style={{
                        background: "#FFFFFF",
                        /* Normal outer */

                        boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
                        borderRadius: "10px",
                        border: "none",
                        height: "50px",
                        width: "300px",
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Your Email</Form.Label> */}
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      style={{
                        background: "#FFFFFF",
                        /* Normal outer */

                        boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
                        borderRadius: "10px",
                        border: "none",
                        height: "50px",
                        width: "300px",
                      }}
                    />
                  </Form.Group>
                </Flex>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Your Email</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    placeholder="Enter Message"
                    style={{
                      background: "#FFFFFF",
                      /* Normal outer */

                      boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      border: "none",
                      height: "215px",
                      maxWidth: "616px",
                      // height: "50px",
                      // width: "300px",
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={6} sm={12}>
              <img src={require("../Assets/foodman.png")} />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
