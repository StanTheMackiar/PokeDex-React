import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";

const SearchBar = () => {

  const {search, handleChange} = useContext(SearchContext)

  const styles = {
    p: "0.3rem",
    display: "flex",
    alignItems: "center",
    width: "15rem",
    m: "1rem",
    backgroundColor: "rgb(105, 15, 15)",
    fontSize: "15px",
    color: "wheat",
    borderRadius: "0.5rem",
    boxShadow: "none",
  };

  return (
    <Paper
      component="form"
      sx={styles}>
      <InputBase
        className="search-bar"
        type="text"
        placeholder="Name, ID or Type..."
        value={search}
        onChange={handleChange}
        sx={{ 
          ml: 1, 
          flex: 1,
          color: "wheat",
          fontFamily: "inherit",
          marginLeft: "1rem" 
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

<input />;

export default SearchBar;
