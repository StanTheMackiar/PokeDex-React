// Hook
import { useState, useEffect } from "react";

// Helper
import { helpHttp } from "../helpers/helpHttp";

const useDetails = (id) => {
  const [pokeDetails, setPokeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const urlBase = "https://pokeapi.co/api/v2/";

  useEffect(() => {
    const getPokemon = async () => {
      setIsLoading(true);
      const res = await helpHttp().get(`${urlBase}pokemon/${id}`);
      const species = res.species && (await helpHttp().get(res.species.url))
      const evo =
        species.evolution_chain &&
        (await helpHttp().get(species.evolution_chain.url))
      console.log(res);
      console.log(species);
      console.log(evo.chain);
      setIsLoading(false);

      const objEvo = () => {
        
        let img = null;
        let id = null;

        if (evo) {
          const {chain} = evo;
          if (chain.evolves_to.length === 0) return null
          return {
            base: chain.species && chain.species.name,
            evo1: chain.evolves_to.length > 0 && chain.evolves_to[0].species.name,
            evo2: chain.evolves_to[0].evolves_to.length > 0 ? chain.evolves_to[0].evolves_to[0].species.name : null,
          };
        } 
        return null;
      };



      const details = () => {
        const type1 = res.types[0] ? res.types[0].type.name : null;
        const type2 = res.types[1] ? res.types[1].type.name : null;
        const img = res.sprites.other["official-artwork"].front_default;
        const habitat = species.habitat ? species.habitat.name : null;
        const evo_chain = objEvo();
        // const ability1 = res.abilities[0] ? res.abilities[0]

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
      console.log(details());
    };
    getPokemon();
  }, []);

  return {
    pokeDetails,
    isLoading,
  };
};

export default useDetails;
