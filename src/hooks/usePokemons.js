import { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const usePokemons = () => {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null);

    const urlBase = "https://pokeapi.co/api/v2"
    let pokemonData = []

    useEffect(()=> {
        const getURLPokemons = async () => {
          try {
            setLoading(true);
            for (let i = 1; i <= 905; i++) {
              pokemonData = [...pokemonData, await helpHttp().get(`${urlBase}/pokemon/${i}`)]
              console.log(pokemonData);
            }
          } 
          catch (error) {
            console.log(error);
          } 
          finally {
            setLoading(false);
            sortArray(pokemonData);
            !pokemonData[0].err ? setResponse(pokemonData) : setResponse(false)
          }
        }
        getURLPokemons()
      },[])

      const sortArray = (array) => array.sort(function(a, b) {
        return a.id-b.id
      });
    

      return {
        loading, response, setResponse, setLoading
      }
    }

export default usePokemons
