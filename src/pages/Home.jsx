import React, { useEffect, useState } from "react";
import useMovie from "../hooks/useMovie";
import { Box, Stack, Typography } from "@mui/material";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getStorage, setStorage } from "./../services/service";
import { MyCartContext } from "../context/context";
import Payment from "../components/Payment";
import Billboard from "../components/Billboard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [categotys, setCategotys] = useState([]);
  const [categoryId, setCategoryId] = useState(28);
  const [categoryName, setCategoryName] = useState("Action");
  const [word, setWord] = useState("");
  const [open, setOpen] = useState(false);
  // const { cart,  toggledQuantity } = MyCartContext();

  useEffect(() => {
    getMovieCategory();
    getMovieListByGenreId();
  }, [categoryId]);

  useEffect(() => {
    searchMovie();
  }, [word]);

  const getMovieListByGenreId = () => {
    // console.log(GenresList.genere[0].id);
    useMovie.getMovieByGenreId(categoryId).then((res) => {
      setMovies(res.data.results);
    });
  };

  const getMovieCategory = () => {
    useMovie.getCategorys.then((res) => {
      setCategotys(res.data.genres);
      //   console.log(res.data.genres)
    });
  };

  const searchMovie = () => {
    useMovie.searchMovie(word).then((res) => {
      if (word) {
        setMovies(res.data.results);
      } else {
        getMovieListByGenreId();
      }
    });
  };

  return (
    <>
      <Navbar word={word} setWord={setWord} setOpen={setOpen} />

      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        {/* Sidebar */}
        <Sidebar
          categotys={categotys}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          setCategoryName={setCategoryName}
        />
        {/* Movies */}
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Billboard />
          <Typography
            fontSize={40}
            fontFamily='Mulish'
            fontWeight="bold"
            ml={{xs:1, md:4}}
            mb={2}
            sx={{ color: "gray" }}
          >
            <span style={{ color: "green" }}>{categoryName}</span> Movie
          </Typography>
          <MovieList movies={movies} />
        </Box>
      </Stack>
      <Payment open={open} setOpen={setOpen} />
    </>
  );
};

export default Home;
