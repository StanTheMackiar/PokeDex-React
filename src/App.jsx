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
import { SearchProvider } from "./context/SearchContext";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [isPokemonOpen, setIsPokemonOpen] = useState(false);
  const { response, loading } = usePokemons();

  return (
    <HashRouter>

      <SearchProvider>

        <Header
          loading={loading}
          isPokemonOpen={isPokemonOpen}
        />

        {response && !isPokemonOpen && <PaginationLink pokemons={pokemons} />}

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
                  response={response}
                  setPokemons={setPokemons}
                  setIsPokemonOpen={setIsPokemonOpen}
                />
              </>
            }
          />
          <Route
            path="/pokemon/:id"
            element={<Pokemon setIsPokemonOpen={setIsPokemonOpen} />}
          />
        </Routes>

        {response && !isPokemonOpen && <PaginationLink pokemons={pokemons} />}

      </SearchProvider>

      <Footer />
      
    </HashRouter>
  );
}

export default App;
