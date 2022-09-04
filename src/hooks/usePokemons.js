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

      const pokemonTypes = {
        normal: types[0].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        fighting: types[1].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        flying: types[2].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        poison: types[3].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        ground: types[4].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        rock: types[5].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        bug: types[6].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        ghost: types[7].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        steel: types[8].pokemon.map((el) => {
          return {
          "name": el.pokemon.name,
          "slot": el.slot
          }
        }),
        fire: types[9].pokemon.map((el) => {
          return {
          "name": el.pokemon.name,
          "slot": el.slot
          }
        }),
        water: types[10].pokemon.map((el) => {
          return {
          "name": el.pokemon.name,
          "slot": el.slot
          }
        }),
        grass: types[11].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        electric: types[12].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        psychic: types[13].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        ice: types[14].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        dragon: types[15].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        dark: types[16].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
        fairy: types[17].pokemon.map((el) => {
          return {
            "name": el.pokemon.name,
            "slot": el.slot
          }
        }),
      };

      const pokemonData = response1.results.map((el) => {
        let type1 = null
        let type2 = null;
        const arrayID = el.url.split("/");
        const id = arrayID[6];
        const name = el.name;
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          pokemonTypes.normal.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "normal"
            if (el.name === name && el.slot === 2) return type2 = "normal" 
            return null
          })
          
          pokemonTypes.bug.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "bug"
            if (el.name === name && el.slot === 2) return type2 = "bug" 
            return null
          })
          
          pokemonTypes.dragon.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "dragon"
            if (el.name === name && el.slot === 2) return type2 = "dragon" 
            return null
          })
          
          pokemonTypes.electric.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "electric"
            if (el.name === name && el.slot === 2) return type2 = "electric" 
            return null
          })
          
          pokemonTypes.fairy.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "fairy"
            if (el.name === name && el.slot === 2) return type2 = "fairy" 
            return null
          })
          pokemonTypes.fighting.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "fighting"
            if (el.name === name && el.slot === 2) return type2 = "fighting" 
            return null
          })
          pokemonTypes.fire.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "fire"
            if (el.name === name && el.slot === 2) return type2 = "fire" 
            return null
          })
          pokemonTypes.flying.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "flying"
            if (el.name === name && el.slot === 2) return type2 = "flying" 
            return null
          })
          pokemonTypes.ghost.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "ghost"
            if (el.name === name && el.slot === 2) return type2 = "ghost" 
            return null
          })
          pokemonTypes.grass.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "grass"
            if (el.name === name && el.slot === 2) return type2 = "grass" 
            return null
          })
          pokemonTypes.ground.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "ground"
            if (el.name === name && el.slot === 2) return type2 = "ground" 
            return null
          })          
          pokemonTypes.ice.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "ice"
            if (el.name === name && el.slot === 2) return type2 = "ice" 
            return null
          })
          pokemonTypes.poison.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "poison"
            if (el.name === name && el.slot === 2) return type2 = "poison" 
            return null
          })
          pokemonTypes.psychic.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "psychic"
            if (el.name === name && el.slot === 2) return type2 = "psychic" 
            return null
          })
          pokemonTypes.rock.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "rock"
            if (el.name === name && el.slot === 2) return type2 = "rock" 
            return null
          })
          pokemonTypes.steel.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "steel"
            if (el.name === name && el.slot === 2) return type2 = "steel" 
            return null
          })          
          pokemonTypes.water.map(el => {
            if (el.name === name && el.slot === 1) return type1 = "water"
            if (el.name === name && el.slot === 2) return type2 = "water" 
            return null
          })

        return {
          id,
          name,
          img,
          type1,
          type2,
        };
      });
      setResponse(pokemonData)
      console.log(pokemonTypes);
      console.log(pokemonData);
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
