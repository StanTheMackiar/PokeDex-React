// Frameworks
import React, { useState, useEffect } from "react";

//Css
import "./Home.css";

// Componentes
import Message from "../../components/Message";
import Card from "../../components/Card/Card";


const Home = ({ search, page, response, setPokemons, setIsPokemonOpen }) => {
  const [currentPage, setCurrentPage] = useState(page);
  search = search.toLowerCase();
  let pokemonLength;

  useEffect(() => {
    setIsPokemonOpen(false);
  }, []);

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
        const filterName = response.filter(
          (el) => el.name && el.name.includes(search)
        );
        const filterID = response.filter(
          (el) => el.id && el.id.toString() === search
        );
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
    <section id="content">
      {response === false && (
        <Message msg="Error :(" bgColor="rgb(164, 14, 14)" color="yellow" />
      )}

      {response &&
        rangePokemons().map((card) => {
          return (
            <Card
              key={card.id}
              type1={card.type1}
              type2={card.type2}
              id={card.id}
              img={card.img}
              name={card.name}
              transition={"transition"}
            />
          );
        })}
    </section>
  );
};

export default Home;
