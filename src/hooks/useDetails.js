// Hook
import { useState, useEffect } from "react";

// Helper
import { helpHttp } from "../helpers/helpHttp";

const useDetails = (id) => {
  const [pokeDetails, setPokeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const urlBase = "https://pokeapi.co/api/v2/";

  let res, evo, species;

  useEffect(() => {
    const getPokemon = async () => {
      setIsLoading(true);
      res = await helpHttp().get(`${urlBase}pokemon/${id}`);
      console.log(res);
      if (!res.err) {
        species = res.species && (await helpHttp().get(res.species.url));
        console.log(species);
        if (!species.err) {
          evo =
            species.evolution_chain &&
            (await helpHttp().get(species.evolution_chain.url));
          console.log(evo.chain);
        }
      } else {
        setIsLoading(false);
        return setPokeDetails(res);
      }
      details(res, species, evo);
      console.log(details(res, species, evo));
    };

    getPokemon();
  }, []);

  const objEvo = (evo) => {
    let img = null;
    let id = null;

    if (evo) {
      return {
        base: evo.chain.species && {
          name: evo.chain.species.name,
          url: `${urlBase}pokemon/${evo.chain.species.name}`
        },
        evo1: evo.chain.evolves_to.length > 0 && {
          name: evo.chain.evolves_to[0].species.name,
          url: `${urlBase}pokemon/${evo.chain.evolves_to[0].species.name}`
        },
        evo2: evo.chain.evolves_to[0].evolves_to.length > 0 && 
        {
          name: evo.chain.evolves_to[0].evolves_to[0].species.name,
          url: `${urlBase}pokemon/${evo.chain.evolves_to[0].evolves_to[0].species.name}`
        }
        
      };
      } 

    return null;
  };

  const details = (res, species, evo) => {
    const type1 = res.types[0] ? res.types[0].type.name : null;
    const type2 = res.types[1] ? res.types[1].type.name : null;
    const img = res.sprites.other["official-artwork"].front_default;
    const habitat = species.habitat ? species.habitat.name : null;
    const evo_chain = objEvo(evo);

    return {
      id: res.id,
      name: res.name,
      img,
      type1,
      type2,
      weight: res.weight,
      height: res.height,
      generation: species.generation.name,
      features: {
        is_legendary: species.is_legendary,
        is_baby: species.is_baby,
        is_mythical: species.is_mythical,
      },
      habitat,
      evo_chain,
      varieties: species.varieties,
    };
  };

  return {
    pokeDetails,
    isLoading,
  };
};

export default useDetails;
