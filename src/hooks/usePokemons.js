// Hook
import { useState, useEffect } from "react";

// Helper
import { helpHttp } from "../helpers/helpHttp";

const usePokemons = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const urlBase = "https://pokeapi.co/api/v2/";

  let types = [];

  useEffect(() => {
    const getURLPokemons = async () => {
      setLoading(true);
      const response1 = await helpHttp().get(urlBase + "pokemon?limit=1133");
      for (let i = 1; i <= 18; i++) {
        const response2 = await helpHttp().get(`${urlBase}type/${i}`);
        types = [...types, response2];
      }

      setLoading(false);

      console.log(types);

      const getPokemonTypes = (id) => {
        return types[id].pokemon.map((el) => {
          return {
            name: el.pokemon.name,
            slot: el.slot,
          };
        });
      };

      const pokemonTypes = {
        normal: getPokemonTypes(0),
        fighting: getPokemonTypes(1),
        flying: getPokemonTypes(2),
        poison: getPokemonTypes(3),
        ground: getPokemonTypes(4),
        rock: getPokemonTypes(5),
        bug: getPokemonTypes(6),
        ghost: getPokemonTypes(7),
        steel: getPokemonTypes(8),
        fire: getPokemonTypes(9),
        water: getPokemonTypes(10),
        grass: getPokemonTypes(11),
        electric: getPokemonTypes(12),
        psychic: getPokemonTypes(13),
        ice: getPokemonTypes(14),
        dragon: getPokemonTypes(15),
        dark: getPokemonTypes(16),
        fairy: getPokemonTypes(17),
      };

      const pokemonData = response1.results.map((el) => {

        const arrayID = el.url.split("/");
        const id = arrayID[6];
        const name = el.name;
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        let type1 = null;
        let type2 = null;

        const filterPokemonTypes = (string) => {
          pokemonTypes[string].map((el) => {
            if (el.name === name && el.slot === 1) type1 = string;
            if (el.name === name && el.slot === 2) type2 = string;
            return null
          });
        };

        filterPokemonTypes("bug");
        filterPokemonTypes("dark");
        filterPokemonTypes("dragon");
        filterPokemonTypes("electric");
        filterPokemonTypes("fairy");
        filterPokemonTypes("fighting");
        filterPokemonTypes("fire");
        filterPokemonTypes("flying");
        filterPokemonTypes("ghost");
        filterPokemonTypes("grass");
        filterPokemonTypes("ground");
        filterPokemonTypes("ice");
        filterPokemonTypes("normal");
        filterPokemonTypes("poison");
        filterPokemonTypes("psychic");
        filterPokemonTypes("rock");
        filterPokemonTypes("steel");
        filterPokemonTypes("water");

        return {
          id,
          name,
          img,
          type1,
          type2
        };
      });
      setResponse(pokemonData);
      // console.log(pokemonData);
      // console.log(pokemonTypes);
    };

    getURLPokemons();
  }, []);

  return {
    loading,
    response,
    setResponse,
    setLoading,
  };
};

export default usePokemons;
