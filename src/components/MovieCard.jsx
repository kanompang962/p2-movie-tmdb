import { CheckCircle, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { MyCartContext } from "../context/context";

const MovieCard = ({ item }) => {
  const { addQuantity } = MyCartContext();

  const handleAddToCart = (item) => {
    addQuantity(item);
  };

  return (
    <Card
      sx={{
        width: { xs: "340px", sm: "358px", md: "305px" },
        boxShadow: "none",
        borderRadius: "10px",
        background: "transparent",
      }}
    >
      {/* Image */}
      <CardMedia
        image={`${import.meta.env.VITE_APP_BASE_IMAGE}/${item.poster_path}`}
        alt={item.title}
        sx={{ width: { xs: "100%", sm: "358px", md: "305px" }, height: 140 }}
      />
      {/* Description */}
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
          position: "relative",
        }}
      >
        <Typography variant="subtitle1" fontFamily='Mulish' fontWeight="bold" color="#fff">
          {item.title}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {item.overview.slice(0, 60)}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Typography>
        <IconButton
          onClick={() => handleAddToCart(item)}
          sx={{
            color: "white",
            bgcolor: "green",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          <ShoppingCartOutlined />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
