// Frameworks
import React from "react";
import styled from "styled-components";

// Imagen Header
import header from "../img/header.webp";
import SearchBar from "./SearchBar";

const Header = ({ search, setSearch, setPage, loading, isPokemonOpen }) => {
  return (
    <HeaderSection>
      <header>
        <a href="/#/">
          <img
            style={{ width: "15rem", height: "auto" }}
            src={header}
            alt="PokéDex"
          />
        </a>
      </header>
      {!loading && !isPokemonOpen && <SearchBar search={search} setSearch={setSearch} setPage={setPage} />}
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.section`
  grid-area: header;
  z-index: 100;
  background: rgb(164, 14, 14);
  background: linear-gradient(
    338deg,
    rgba(164, 14, 14, 1) 0%,
    rgba(99, 6, 6, 1) 100%
  );
  box-shadow: 2px 2px 5px rgb(22, 5, 5);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 25rem));
  grid-template-rows: auto;
  position: sticky;
  top: 0;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 0.5rem;
`;
