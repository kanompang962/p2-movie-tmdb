import React, { useEffect, useState } from "react";
import useMovie from "../hooks/useMovie";
import { Stack, Typography } from "@mui/material";

const Billboard = () => {
  const [movieBillboard, setMovieBillboard] = useState({});

  useEffect(() => {
    getBillboard();
  }, []);

  const getBillboard = () => {
    const randomNumber = Math.floor(Math.random() * 20);
    // console.log(randomNumber);
    useMovie.getMovieBillboard().then((res) => {
      setMovieBillboard(res.data.results[randomNumber]);
    });
  };

  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <img
        style={{
          width: "100%",
          height: "285px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
        src={
          movieBillboard.backdrop_path
            ? `${import.meta.env.VITE_APP_BASE_IMAGE}${
                movieBillboard.backdrop_path
              }`
            : `https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?auto=compress&cs=tinysrgb&w=600`
        }
        alt="billboard"
      />
      <Stack position="absolute" top={{xs:'30%', md:'30%'}} paddingLeft={{xs:1, md:4}} paddingRight={{xs:1, md:4}} zIndex={0}>
        <Typography
          fontSize={{ xs: 24, md: 40 }}
          color="white"
          fontFamily='Mulish'
          fontWeight="bold"
          sx={{ opacity: "0.8" }}
        >
          {movieBillboard.title}
        </Typography>
        <Typography
          fontSize={{xs:'12px', md:'16px'}}
          color="white"
          width={{xs:'100%', md:'60%'}}
        //   sx={{ opacity: "0.5" }}
        >
          {movieBillboard.overview&&movieBillboard.overview.substring(0,560)}
        </Typography>
      </Stack>
      <div className="bg"></div>
    </div>
  );
};

export default Billboard;