// Frameworks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";

// Componentes

//Css
import "./Home.css";
import Message from "../../components/Message";

const Home = ({ search, page, response, setPokemons }) => {
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
        const filterName = response.filter((el) => el.name && el.name.includes(search));
        const filterID = response.filter((el) => el.id && el.id.toString() === search);
        const filterType1 = response.filter(
          (el) => el.type1 && el.type1.includes(search)
        );
        const filterType2 = response.filter(
          (el) => el.type2 && el.type2.includes(search)
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
    <>
      <section id="content">
        {response === false && (
          <Message msg="Error :(" bgColor="rgb(164, 14, 14)" color="yellow" />
        )}
        {response &&
          rangePokemons().map((card) => {
            return (
              <div
                key={card.id}
                className={`card  ${card.type1 ? card.type1 : `normal`}card`}
              >
                <Link to={`/pokemon/${card.id}`}>
                  <img
                    id={`${card.id}`}
                    src={card.img}
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
                  {card.type1 && (
                    <span className={`${card.type1} element`}>
                      {helpFirstLetterUC(card.type1)}
                    </span>
                  )}
                  {card.type2 && (
                    <span className={`${card.type2} element`}>
                      {helpFirstLetterUC(card.type2)}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Home;
