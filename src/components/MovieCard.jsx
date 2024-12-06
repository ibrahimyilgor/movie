import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

import useWindowDimensions from "../utils";

export default function MovieCard({ img, data }) {
  const { height, width } = useWindowDimensions();

  const styles = {
    root: {
      display: "flex",
      maxWidth: width > height ? "50%" : "90%",
      overflow: "auto",
    },
    cardBox: {
      display: "flex",
      flexDirection: "column",
    },
    cardContent: {
      flex: "1 0 auto",
    },
    text: {
      color: "text.secondary",
    },
    cardMedia: {
      width: "150px",
    },
    ratingBox: {
      display: "flex",
      alignItems: "center",
      pl: 1,
      pb: 0,
      margin: 2,
    },
    ratingTextBox: {
      ml: 2,
    },
  };

  return (
    <Card sx={styles.root}>
      <Box sx={styles.cardBox}>
        <CardContent sx={styles.cardContent}>
          <Typography component="div" variant="h5">
            {(data?.Title || "") + " " + (data?.Year ? `(${data?.Year})` : "")}
          </Typography>
          <Typography variant="subtitle1" component="div" sx={styles.text}>
            {data?.Plot || ""}
          </Typography>
        </CardContent>
        <Box sx={styles.ratingBox}>
          <Rating
            name="half-rating"
            value={Number(data?.imdbRating) || 0}
            precision={0.2}
            max={10}
            readOnly
          />
          <Box sx={styles.ratingTextBox}>
            {(Number(data?.imdbRating) || 0) + " / 10"}
          </Box>
        </Box>
      </Box>
      <CardMedia component="img" image={img} sx={styles.cardMedia} />
    </Card>
  );
}
