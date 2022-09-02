import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";
import "./Pokemon.css";

const Pokemon = ({ response, loading }) => {

  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (response) {
      console.log(response);
      const { name, weight } = (response[id-1]);
      setCard({
        ...card,
        name,
        weight,
      });
      console.log(card);
    }
    
  }, [response]);



  return (
    <>
      {loading && (
        <CircularProgress
          size={70}
          sx={{
            color: "yellow",
            margin: "10rem auto 8rem auto",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}
      {response && (
        <section className="pokeDetailsBox">
          <h2 className="title">{card.name && helpFirstLetterUC(card.name)}</h2>
          <div className="imgContainer">
            <img className="imgPokemon"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
                .toString()
                .padStart(3, "0")}.png`}
              alt="sprite"
            />
          </div>
          <div className="details">
            <p>Weight: {card.weight}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Pokemon;
