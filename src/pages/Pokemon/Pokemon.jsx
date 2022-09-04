// FrameWorks
import { Grow } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Hooks y helpers
import { useParams } from "react-router-dom";
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";
import "./Pokemon.css";

// Componente

const Pokemon = ({ response, setIsPokemonOpen }) => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  // Cuando isPokemonOpen es true, se desactivan los botones de paginacion
  useEffect(() => {
    setIsPokemonOpen(true);
  }, []);

  useEffect(() => {
    if (response) {
      const filter = response.find((el) => el.id === id);
      setCard(filter);
    }
  }, [response]);

  return (
    <section>
      {response && (
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
      )}
    </section>
  );
};

export default Pokemon;
