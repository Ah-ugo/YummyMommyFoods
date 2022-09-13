import { Card, Button } from "antd";
import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";

export default function MenuCards(props) {
  return (
    <div>
      <Card
        style={{
          background: "white",
          maxWidth: "400px",
          borderRadius: "10px 10px 0px 0px",
        }}
        cover={
          <img
            src={props.img}
            style={{ borderRadius: "10px 10px 0px 0px", maxWidth: "353px" }}
            alt="menu Image"
          />
        }>
        <Flex
          style={{ alignItems: "flex-start", justifyContent: "space-between" }}>
          <Row>
            <Col>
              <Text>{props.foodname}</Text>
            </Col>
            <Col>
              <Text>{props.foodprice}</Text>
            </Col>
          </Row>
        </Flex>
        <Flex
          style={{ alignItems: "flex-start", justifyContent: "space-between" }}>
          <Row style={{ alignItems: "center" }}>
            <Col>
              {/* <Flex> */}
              <Text
                style={{
                  background: "#BEBEBE",
                  boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
                  borderRadius: "5px",
                }}>
                {props.time}
              </Text>
              {/* </Flex> */}
            </Col>
            <Col>
              <Button
                style={{
                  borderRadius: "5px",
                  background: "#F3BA00",
                  borderColor: "#F3BA00",
                  margin: "10px",
                  alignItems: "center",
                }}>
                {/* <p style={{ color: "white" }}> */}
                <label style={{ color: "white" }}>Place Order</label>
                {/* </p> */}
              </Button>
            </Col>
          </Row>
        </Flex>
      </Card>
    </div>
  );
}
