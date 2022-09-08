// Hook
import { useState, useEffect } from "react";

// Helper
import { helpHttp } from "../helpers/helpHttp";
import { helpAddZeros } from "../helpers/helpAddZeros";

const usePokemons = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const urlBase = "https://pokeapi.co/api/v2/";

  let response1;
  let response2;
  let types = [];

  // Peticiones y ejecucion de la logica
  useEffect(() => {
    const getURLPokemons = async () => {
      setLoading(true);
      response1 = await helpHttp().get(urlBase + "pokemon?limit=905");
      if (!response1.err) {
        for (let i = 1; i <= 18; i++) {
          response2 = await helpHttp().get(`${urlBase}type/${i}`);
          types = [...types, response2];
        }
      } else {
        setLoading(false);
        return setResponse(response1);
      }

      setLoading(false);
      setResponse(pokemonData(getPokemonTypes()))
    };

    getURLPokemons();
  }, []);

  // Obtiene un array con cada tipo y sus Pokemon
  const getPokemonTypes = () => {
    const getTypes = (id) => {
      return types[id].pokemon.map((el) => {
        return {
          name: el.pokemon.name,
          slot: el.slot,
        };
      });
    };

    return {
      normal: getTypes(0),
      fighting: getTypes(1),
      flying: getTypes(2),
      poison: getTypes(3),
      ground: getTypes(4),
      rock: getTypes(5),
      bug: getTypes(6),
      ghost: getTypes(7),
      steel: getTypes(8),
      fire: getTypes(9),
      water: getTypes(10),
      grass: getTypes(11),
      electric: getTypes(12),
      psychic: getTypes(13),
      ice: getTypes(14),
      dragon: getTypes(15),
      dark: getTypes(16),
      fairy: getTypes(17),
    };
  };

  // Une toda la informacion en un solo objeto
  const pokemonData = (callback) => {
    
    const pokeData = response1.results.map((el) => {
      const arrayID = el.url.split("/");
      const id = arrayID[6];
      const name = el.name;
      const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${helpAddZeros(id)}.png`;
      let type1 = null;
      let type2 = null;

      const filterPokemonTypes = (string) => {
        callback[string].map((el) => {
          if (el.name === name && el.slot === 1) type1 = string;
          if (el.name === name && el.slot === 2) type2 = string;
          return null;
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
        type2,
      };
    });
    return pokeData;
  };
  // Variables de retorno del hook
  return {
    loading,
    response,
    setResponse,
    setLoading,
  };
};

export default usePokemons;