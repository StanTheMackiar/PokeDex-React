import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

// Componentes
import Message from "../Message";

//Css
import "./Home.css";
import { Link } from "react-router-dom";
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";

const Home = ({ search, page, response, loading, setPokemons }) => {
  const [currentPage, setCurrentPage] = useState(page);
  search = search.toLowerCase();

  let pokemonLength;

  useEffect(() => {
    setCurrentPage((page - 1) * 20);
  }, [page]);

  useEffect(() => {
    setPokemons(pokemonLength);
    console.log(`Total Pokemones: ${pokemonLength}`);
  }, [response, search]);

  const rangePokemons = () => {
    if (response) {
      if (search.length === 0) {
        pokemonLength = response.length;
        return response.slice(currentPage, currentPage + 20);
      } else {
        const filterName = response.filter((el) => el.name.includes(search));
        const filterID = response.filter((el) => el.id.toString() === search);
        const filterType1 = response.filter((el) =>
          el.types[0].type.name.includes(search)
        );
        const filterType2 = response.filter(
          (el) => el.types.length > 1 && el.types[1].type.name.includes(search)
        );
        const filtered = [
          ...filterName,
          ...filterID,
          ...filterType1,
          ...filterType2,
        ];
        pokemonLength = filtered.length;
        return filtered.slice(currentPage, currentPage + 20);
      }
    }
  };



  return (
    <section id="content">
      {loading && (
        <CircularProgress
          size={70}
          sx={{
            color: "yellow",
            margin: "10rem auto 8rem auto",
          }}
        />
      )}
      {response === false && (
        <Message msg="Error :(" bgColor="rgb(164, 14, 14)" color="yellow" />
      )}
      {response &&
        rangePokemons().map((card, index) => {
          return (
            <div
              key={index}
              className={`card  ${
                card.types ? card.types[0].type.name : `normal`
              }card`}
            >
              <Link to={`/pokemon/${card.id}`}>
                <img
                  id={`${card.id}`}
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${card.id &&
                    card.id.toString().padStart(3, "0")}.png`}
                  className="imgCard"
                  alt="sprite"
                />
              </Link>
              <p className="titleCarld">
                <strong>{helpFirstLetterUC(card.name)}</strong>
              </p>
              <p className="idCard">
                <em>N.° {card.id.toString().padStart(3, "0")}</em>
              </p>
              <div className="elements">
                {card.types && (
                  <span className={`${card.types[0].type.name} element`}>
                    {helpFirstLetterUC(card.types[0].type.name)}
                  </span>
                )}
                {card.types.length > 1 && (
                  <span className={`${card.types[1].type.name} element`}>
                    {helpFirstLetterUC(card.types[1].type.name)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Home;
