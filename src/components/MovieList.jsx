import { Box, Stack } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, direction }) => {
  //   console.log(movies);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
    >
      {movies.map((item, index) => (
        <Box key={index} sx={{ color: "black" }}>
          <MovieCard item={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default MovieList;
