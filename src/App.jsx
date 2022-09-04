import React, { useState } from "react";
import styled from "styled-components";
import { Route, Routes, HashRouter } from "react-router-dom";

// Componentes
import Footer from "./components/Footer";
import Header from "./components/Header";

// Hooks
import usePokemons from "./hooks/usePokemons";
import PaginationLink from "./components/PaginationLink";
import Error404 from "./pages/Error404";
import Pokemon from "./pages/Pokemon/Pokemon";
import Home from "./pages/Home/Home";
import { CircularProgress } from "@mui/material";

const AppContainer = styled.main`
  /* display: grid;
  grid-template-areas: 
    "."
    "header"
    "message"
    "paginationTop"
    "spinner"
    "cards"
    "navbuttons"
    "footer"; */
`;

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { response, loading } = usePokemons();
  const [pokemons, setPokemons] = useState(null);

  return (
    <AppContainer>
      <Header
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        loading={loading}
      />
      {loading && (
        <CircularProgress
          size={70}
          sx={{
            color: "yellow",
            margin: "10rem auto 8rem auto",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}
      <HashRouter>
        {response && (
          <PaginationLink page={page} setPage={setPage} pokemons={pokemons} />
        )}
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route
            path="/"
            element={
              <Home
                search={search}
                page={page}
                setPage={setPage}
                response={response}
                loading={loading}
                setPokemons={setPokemons}
                pokemons={pokemons}
              />
            }
          ></Route>
          <Route
            path="/pokemon/:id"
            element={<Pokemon response={response} loading={loading} />}
          />
        </Routes>
        {response && (
          <PaginationLink page={page} setPage={setPage} pokemons={pokemons} />
        )}
      </HashRouter>

      <Footer />
    </AppContainer>
  );
}

export default App;
