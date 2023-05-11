"use client"

import React from "react";

import { withStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const styles = {
  card: {
    margin: "0 20px"
  },
  media: {
    height: 140
  }
};

const CardWithImage=(props) =>{
  const { classes, imageart, reference, description } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
        component="img"
        height="140"
        image={imageart} title={description} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {reference}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a target="_blank" href="https://w3js.com">
          <Button size="small" color="primary">
            Share
          </Button>
        </a>
        <a target="_blank" href="https://w3js.com">
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
export default CardWithImage
