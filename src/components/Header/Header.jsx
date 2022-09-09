// Frameworks
import React from "react";
import { Link } from "react-router-dom";

// Css
import './Header.css'

// Imagen Header
import header from "../../img/header.webp";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ search, setSearch, setPage, loading, isPokemonOpen }) => {
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
      {!loading && !isPokemonOpen && <SearchBar search={search} setSearch={setSearch} setPage={setPage} />}
    </div>
  );
};

export default Header;
