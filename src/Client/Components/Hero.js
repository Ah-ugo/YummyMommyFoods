import React from "react";
import NavbarComponent from "./Navbar";
import Herobg from "../Assets/banner_bg.jpg";
import { Text } from "@chakra-ui/react";
import { Row, Col, Container } from "react-bootstrap";
import Cuate from "../Assets/cuate.png";
import { Button } from "@mui/material";
// import { GiChickenOven, GiBowlOfRice, GiFrenchFries } from "react-icons/gi";

export default function Hero() {
  return (
    <div
      style={{
        background: `#1AC073`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // paddingTop: "119px",
        // height: "100vh",
      }}>
      <NavbarComponent />
      <div style={{ paddingTop: "119px", paddingBottom: "70px" }}>
        <Container>
          <Row
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}>
            <Col
              lg={6}
              sm={12}
              // className="text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}>
              <Text style={{ fontSize: "50px", color: "white" }}>
                Authentic Home Food In Nigeria
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: "20px",
                  letterSpacing: "-0.012em",
                  color: "white",
                  marginBottom: "40px",
                }}>
                YummyMommy is a courier service in which authentic home cook
                food is delivered to a customer.
              </Text>
              <Button
                style={{
                  background: "#F3BA00",
                  borderRadius: "10px 10px 10px 10px",
                  borderColor: "#F3BA00",
                  boxShadow: "none",
                  color: "white",
                }}>
                View Our Menu
              </Button>
            </Col>
            <Col lg={6} sm={12}>
              <img
                src={Cuate}
                alt="Cuate"
                className="d-non d-lg-flex d-md-flex pt-3 pt-lg-0 pt-xl-3"
                style={{ maxWidth: "412px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
