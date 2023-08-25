import { ArrowBackRounded, SearchSharp } from "@mui/icons-material";
import { IconButton, Paper, Stack } from "@mui/material";
import React, { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";

const SearchBar = ({ word, setWord, showMobileSearch, setshowMobileSearch }) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (searchTerm) {
    //   navigate(`/search/${searchTerm}`);
    //   setSearchTerm("");
    // }
  };

  const handleBack = useCallback(() => {
    setshowMobileSearch((current) => !current);
  }, []);

  return (
    // Mobile = false
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid gray",

        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: {
          xs: showMobileSearch ? "flex" : "none",
          md: "flex",
        },
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#fff", opacity: 0.7 }}>
        <SearchSharp />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
