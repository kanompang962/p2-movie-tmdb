import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import SearchBar from "./SearchBar";
import {
  ArrowBackRounded,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { MyCartContext } from "../context/context";

const Navbar = ({ word, setWord, setOpen }) => {
  const [showMobileSearch, setshowMobileSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { amount, cart, removeQuantity } = MyCartContext();

  const handleSwitSearch = useCallback(() => {
    setshowMobileSearch((current) => !current);
  }, []);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Stack
      zIndex={1000}
      direction="row"
      alignItems="center"
      p={2}
      gap={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: showMobileSearch ? "center" : "space-between",
      }}
    >
      {/* Logo */}
      <Box display={`${showMobileSearch ? "none" : "flex"}`}>
        {/* <img src={logo} alt="logo" height={60} /> */}
        <Typography
          fontSize={{xs:24,md:40}}
          fontFamily="Mulish"
          fontWeight="bold"
          sx={{ color: "gray" }}
        >
          TMDB <span style={{ fontSize: 14 }}>&copy; Dev 2023 Thianchai</span>
        </Typography>
      </Box>
      {/* Icon Back */}
      <Box display={showMobileSearch ? "flex" : "none"}>
        <IconButton onClick={handleSwitSearch} sx={{ color: "#fff" }}>
          <ArrowBackRounded />
        </IconButton>
      </Box>
      {/* Search */}
      <SearchBar
        word={word}
        setWord={setWord}
        showMobileSearch={showMobileSearch}
        setshowMobileSearch={setshowMobileSearch}
      />
      {/* Icon */}
      <Stack
        display={`${showMobileSearch ? "none" : ""}`}
        direction="row"
        alignItems="center"
      >
        <IconButton
          onClick={handleSwitSearch}
          sx={{ display: { md: "none" }, color: "#fff", opacity: "0.7" }}
        >
          <Search />
        </IconButton>
        <Box position="relative">
          <IconButton
            onClick={() => setShowCart((prev) => !prev)}
            className="cart-count"
            sx={{
              color: "#fff",
              opacity: "0.7",
              marginRight: "20px",
            }}
          >
            <ShoppingCartOutlined />
            <Box
              className="count"
              borderRadius="50%"
              width="10px"
              height="10px"
              bgcolor="green"
              display={amount == 0 ? "none" : "flex"}
              justifyContent="center"
              alignItems="center"
              padding="10px"
            >
              <Typography sx={{ fontSize: "16px" }}>{amount}</Typography>
            </Box>
          </IconButton>
          {/* List Cart */}
          <Box
            display={showCart ? "flex" : "none"}
            flexDirection="column"
            alignItems="center"
            position="absolute"
            minWidth={150}
            minHeight={90}
            marginTop={2}
            right={30}
            bgcolor="white"
            borderRadius={2}
            sx={{ background: "#1e1e1e" }}
          >
            <Stack
              direction="column"
              gap={2}
              padding={2}
              sx={{
                width: { sx: "200px", md: "400px" },
                maxHeight: "280px",
                overflowX: "auto",
              }}
            >
              {cart.map((item, i) => (
                <Stack key={i} direction="row" gap={2} alignItems="center">
                  <CardMedia
                    image={`${import.meta.env.VITE_APP_BASE_IMAGE}/${
                      item.poster_path
                    }`}
                    alt={item.title}
                    sx={{
                      borderRadius: "8px",
                      objectFit: "cover",
                      width: { xs: "100px", md: "150px" },
                      height: { xs: "100px", md: "80px" },
                    }}
                  />
                  <Typography color="white">{item.title}</Typography>
                </Stack>
              ))}
            </Stack>
            {amount > 0 ? (
              <Stack direction="row" justifyContent="space-around" width="100%">
                <Button
                  onClick={() => handleClickOpen()}
                  variant="contained"
                  color="success"
                  sx={{
                    width: "45%",
                    mb: "12px",
                    borderRadius: "20px",
                  }}
                >
                  Buy
                </Button>
                <Button
                  onClick={() => removeQuantity()}
                  variant="outlined"
                  color="error"
                  sx={{
                    width: "45%",
                    mb: "12px",
                    borderRadius: "20px",
                  }}
                >
                  remove
                </Button>
              </Stack>
            ) : (
              <Typography color="green" fontSize={16} fontWeight="bold">
                Empty
              </Typography>
            )}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
