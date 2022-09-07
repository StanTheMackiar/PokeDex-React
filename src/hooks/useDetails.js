// Hook
import { useState, useEffect } from "react";

// Helper
import { helpAddZeros } from "../helpers/helpAddZeros";
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
      if (!res.err) {
        species = res.species && (await helpHttp().get(res.species.url));
        if (!species.err) {
          evo =
            species.evolution_chain &&
            (await helpHttp().get(species.evolution_chain.url));
        }
      } else {
        setIsLoading(false);
        return setPokeDetails(res);
      }
      setPokeDetails( await details(res, species, evo ));
      console.log(( await details(res, species, evo )));
      setIsLoading(false)
    };

    getPokemon();
  }, []);

  const getEvoData = async (name) => {
    const res = await helpHttp().get(`${urlBase}pokemon/${name}`)
    if (!res.err) {
      const id = res.id
      const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${helpAddZeros(id)}`;
      const type1 = res.types[0] ? res.types[0].type.name : null
      const type2 = res.types[1] ? res.types[1].type.name : null
      
      return {
        name,
        id,
        img,
        type1,
        type2,
      };
    } else {
      return res;
    }
  };

  const getEvolutions = async (evo) => {
    if (evo) {
      if (evo.chain.evolves_to.length === 0) return null;
      let base, evo1, evo2;

      if (evo.chain.species) {
        const name = evo.chain.species.name;
        base = await getEvoData(name);
      }
      if (evo.chain.evolves_to.length > 0) {
        const name = evo.chain.evolves_to[0].species.name;
        evo1 = await getEvoData(name);
      }
      if (evo.chain.evolves_to[0].evolves_to.length > 0) {
        const name = evo.chain.evolves_to[0].evolves_to[0].species.name;
        evo2 = await getEvoData(name);

        return {
          base,
          evo1,
          evo2,
        };
      }
      return null;
    }
  };

  const details = async (res, species, evo) => {
    const evo_chain = await getEvolutions(evo);
    const type1 = res.types[0] ? res.types[0].type.name : null;
    const type2 = res.types[1] ? res.types[1].type.name : null;
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${helpAddZeros(res.id)}.png`;
    const habitat = species.habitat ? species.habitat.name : null;
    const stats = res.stats && {
      hp: res.stats[0].base_stat,
      attack: res.stats[1].base_stat,
      defense: res.stats[2].base_stat,
      sp_attack: res.stats[3].base_stat,
      sp_defense: res.stats[4].base_stat,
      speed: res.stats[5].base_stat,
    }
    const description = species.flavor_text_entries ? species.flavor_text_entries[0].flavor_text : null
    const ability =  res.abilities ? res.abilities[0].ability.name : null;
    const color = species.color ? species.color.name : null;
    

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
      ability,
      stats,
      description,
      color,
    };
  };

  return {
    pokeDetails,
    isLoading,
  };
};

export default useDetails;
