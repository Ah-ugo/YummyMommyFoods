import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
// import { Button } from "antd";
import React from "react";

export default function Menu2Card(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="foodImage"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.foodname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.foodprice}
          </Typography>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}>
            <Button style={{ color: "#1AC073" }}>{props.time}</Button>
            <Button style={{ backgroundColor: "#1AC073", color: "white" }}>
              Add to cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
