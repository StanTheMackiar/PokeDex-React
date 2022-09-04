// FrameWorks
import React, { useEffect, useState } from "react";

// Hooks y helpers
import { useParams } from "react-router-dom";
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";
import "./Pokemon.css";

const Pokemon = ({ response }) => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (response) {
      const filter = response.find(el => el.id === id)
      setCard(filter);
    }
  }, [response]);

  return (
    <>
      {response && (
        <section className="pokeDetailsBox">
          <h2 className="title">{card.name && helpFirstLetterUC(card.name)}</h2>
          <div className="imgContainer">
            <img
              className="imgPokemon"
              src={card.img}
              alt="sprite"
            />
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
      )}
    </>
  );
};

export default Pokemon;
