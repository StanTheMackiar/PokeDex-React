// FrameWorks
import { CircularProgress, Grow, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

// Css
import "./Pokemon.css";

// Hooks
import useDetails from "../../hooks/useDetails";
import { Link, useParams } from "react-router-dom";

// Helpers
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";
import { helpAddZeros } from "../../helpers/helpAddZeros";

// Componentes
import Card from "../../components/Card/Card";
import Atributes from "../../components/Atributes";
import Stats from "../../components/Stats";
import NavPokemonDetails from "../../components/NavPokemonDetails";
import Message from "../../components/Message";

const Pokemon = ({ setIsPokemonOpen }) => {
  const { id } = useParams();
  const { pokeDetails: card, isLoading, setPokeDetails } = useDetails(id);
  const [slideEffect, setSlideEffect] = useState("up");

  useEffect(() => {
    setIsPokemonOpen(true);
  }, []);

  const addComma = (str) => {
    let newstr = str.slice(0, -1) + "," + str.slice(-1);
    return newstr;
  };
  return (
    <section>
      {isLoading && (
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
      {!card && !isLoading && (
        <Message
          color="yellow"
          bgColor="darkred"
          msg="404, Pokemon not found"
        />
      )}
      {card && !isLoading && (
        <>
          <NavPokemonDetails id={id} setSlideEffect={setSlideEffect}/>
          <Slide direction={slideEffect} in={true}>
            <section className="pokeDetailsBox">
              <div className="back-button">
                <Link to="/">
                <Close
                  sx={{
                    margin: "0.3rem",
                    cursor: "pointer",
                    color: "white",
                    background:
                      "linear-gradient(#ad2121 20%, rgb(202, 50, 12) 100%)",
                    borderRadius: "20%",
                    padding: "0.5rem",
                  }}
                />
                </Link>
              </div>

              <div className="title">
                <h2>
                  {helpFirstLetterUC(card.name)} <i>#{helpAddZeros(id)}</i>
                </h2>
              </div>

              <div className="generation">
                <h3>{helpFirstLetterUC(card.generation)}</h3>
              </div>

              <div className="imgContainer">
                <img className="imgPokemon" src={card.img} alt="sprite" />
              </div>

              <div className="types">
                {card.type1 && (
                  <span className={`${card.type1} type`}>
                    {helpFirstLetterUC(card.type1)}
                  </span>
                )}
                {card.type2 && (
                  <span className={`${card.type2} type`}>
                    {helpFirstLetterUC(card.type2)}
                  </span>
                )}
              </div>

              <div className="atributes">
                <h3>Atributes</h3>
                {card.weight && (
                  <Atributes
                    title={<b>Weight: </b>}
                    value={`${addComma(card.weight.toString())} kg`}
                  />
                )}
                {card.height && (
                  <Atributes
                    title={<b>Height: </b>}
                    value={`${card.height / 100} m`}
                  />
                )}
                {card.ability && (
                  <Atributes
                    title={<b>Ability: </b>}
                    value={helpFirstLetterUC(card.ability)}
                  />
                )}
                {card.color && (
                  <Atributes
                    title={<b>Color: </b>}
                    value={helpFirstLetterUC(card.color)}
                  />
                )}
                {card.habitat && (
                  <Atributes
                    title={<b>Habitat: </b>}
                    value={helpFirstLetterUC(card.habitat)}
                  />
                )}
              </div>

              <div className="description">
                <h3>Description</h3>
                <p className="description-text">{card.description}</p>
              </div>

              <div className="features">
                <h3>Features</h3>
                <span className="feature">
                  Is Legendary? {card.features.is_legendary ? "Yes" : "No"}
                </span>
                <span className="feature">
                  Is Mythical? {card.features.is_mythical ? "Yes" : "No"}
                </span>
                <span className="feature">
                  Is a Baby? {card.features.is_baby ? "Yes" : "No"}
                </span>
              </div>

              <div className="stats">
                <Stats title="HP" value={card.stats.hp} />
                <Stats title="Attack" value={card.stats.attack} />
                <Stats title="Defense" value={card.stats.defense} />
                <Stats title="Special Attack" value={card.stats.sp_attack} />
                <Stats title="Special Defense" value={card.stats.sp_defense} />
                <Stats title="Speed" value={card.stats.speed} />
              </div>

              {card.evo_chain ? (
                <div className="evochain">
                  <h3>Evolutionary Chain</h3>
                  {card.evo_chain.base && (
                    <div className="base">
                      <h4>Base</h4>
                      <Card
                        img={card.evo_chain.base.img}
                        name={card.evo_chain.base.name}
                        id={card.evo_chain.base.id}
                        type1={card.evo_chain.base.type1}
                        type2={card.evo_chain.base.type2}
                        transition={"no-transition"}
                      />
                    </div>
                  )}
                  {card.evo_chain.evo1 && (
                    <div className="evo1">
                      <h4>{card.evo_chain.evo2 ? "Middle" : "Final"}</h4>
                      <Card
                        img={card.evo_chain.evo1.img}
                        name={card.evo_chain.evo1.name}
                        id={card.evo_chain.evo1.id}
                        type1={card.evo_chain.evo1.type1}
                        type2={card.evo_chain.evo1.type2}
                        transition={"no-transition"}
                      />
                    </div>
                  )}
                  {card.evo_chain.evo2 && (
                    <div className="evo2">
                      <h4>{card.evo_chain.evo2 && "Final"}</h4>
                      <Card
                        img={card.evo_chain.evo2.img}
                        name={card.evo_chain.evo2.name}
                        id={card.evo_chain.evo2.id}
                        type1={card.evo_chain.evo2.type1}
                        type2={card.evo_chain.evo2.type2}
                        transition={"no-transition"}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="evochain">
                  <h3>This pokemon has no evolution</h3>
                </div>
              )}
            </section>
          </Slide>
        </>
      )}
    </section>
  );
};

export default Pokemon;
