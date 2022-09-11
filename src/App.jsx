import React, { useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

// Componentes
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Hooks
import usePokemons from "./hooks/usePokemons";
import PaginationLink from "./components/PaginationLink";
import Error404 from "./pages/Error404";
import Pokemon from "./pages/Pokemon/Pokemon";
import Home from "./pages/Home/Home";
import { CircularProgress } from "@mui/material";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState(null);
  const [isPokemonOpen, setIsPokemonOpen] = useState(false);


  const { response, loading } = usePokemons()
  return (
    <HashRouter>
      <Header
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        loading={loading}
        isPokemonOpen={isPokemonOpen}
      />
      {response && !isPokemonOpen && (
        <PaginationLink
          page={page}
          setPage={setPage}
          pokemons={pokemons}
        />
      )}
      <Routes>
        <Route
          path="*"
          element={<Error404 />}
        />
        <Route
          path="/"
          element={
            <>
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
              <Home
                search={search}
                page={page}
                response={response}
                setPokemons={setPokemons}
                setIsPokemonOpen={setIsPokemonOpen}
              />
            </>
          }></Route>
        <Route
          path="/pokemon/:id"
          element={
            <Pokemon
              setIsPokemonOpen={setIsPokemonOpen}
              page={page}
            />
          }
        />
      </Routes>
      {response && !isPokemonOpen && (
        <PaginationLink
          page={page}
          setPage={setPage}
          pokemons={pokemons}
        />
      )}
      <Footer />
    </HashRouter>
  );
}

export default App;
