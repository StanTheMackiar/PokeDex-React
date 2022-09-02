import { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const usePokemons = () => {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null);

    const urlBase = "https://pokeapi.co/api/v2/"
    let pokemonData = []

    useEffect(()=> {
        const getURLPokemons = async () => {
          try {
            setLoading(true);
            let res = await helpHttp().get(`${urlBase}pokemon?limit=905`)
            res.results.map(el => fetchPokemons(el.url))
          } catch (e) {
            setLoading(false)
            setResponse(false)
            console.log(e);
          }
        }

        getURLPokemons()
      },[])

      const fetchPokemons = async (url) => {
        try {
          let res = await helpHttp().get(url)
          pokemonData = [...pokemonData, res];
          setResponse(sortArray(pokemonData))
          // console.log(pokemonData);
          
        } catch (e) {
          console.log(false);
          setResponse(e)
        } finally {
          setLoading(false);
        }
      }
      
      const sortArray = (array) => array.sort(function(a, b) {
        return a.id-b.id
      });
    

      return {
        loading, response, setResponse, setLoading
      }
    }

export default usePokemons
