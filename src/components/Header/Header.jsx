// Frameworks
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Css
import './Header.css'

// Imagen Header
import header from "../../img/header.webp";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../../context/SearchContext";

const Header = ({ loading, isPokemonOpen }) => {

  const {setSearch} = useContext(SearchContext)

  return (
    <div className="header-section">
      <header>
        <Link to="/" onClick={() => setSearch("")}>
          <img
            style={{ width: "15rem", height: "auto" }}
            src={header}
            alt="PokéDex"
          />
        </Link>
      </header>
      {!loading && !isPokemonOpen && <SearchBar/>}
    </div>
  );
};

export default Header;
