// FrameWorks
import { Grow } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Hooks y helpers
import { useParams } from "react-router-dom";
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";
import "./Pokemon.css";
import useDetails from "../../hooks/useDetails";

// Componente

const Pokemon = ({ setIsPokemonOpen }) => {
  const { id } = useParams();
  const { pokeDetails, loading } = useDetails(id);

  // Cuando isPokemonOpen es true, se desactivan los botones de paginacion
  useEffect(() => {
    setIsPokemonOpen(true);
  }, []);


  return (
    <section>
      {/* {response && (
        <Grow in={true}>
          <section className="pokeDetailsBox">
            <h2 className="title">
              {card.name && helpFirstLetterUC(card.name)}
            </h2>
            <div className="imgContainer">
              <img className="imgPokemon" src={card.img} alt="sprite" />
              <div className="elements">
                {card.type1 && (
                  <span className={`${card.type1} element`}>
                    {helpFirstLetterUC(card.type1)}
                  </span>
                )}
                {card.type2 && (
                  <span className={`${card.type2} element`}>
                    {helpFirstLetterUC(card.type2)}
                  </span>
                )}
              </div>
            </div>
            <div className="details">
              <p>Weight: {card.weight}</p>
            </div>
          </section>
        </Grow>
      )} */}
    </section>
  );
};

export default Pokemon;
