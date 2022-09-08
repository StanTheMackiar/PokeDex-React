// FrameWorks
import { CircularProgress, Slide } from "@mui/material";
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
import SelectPokemon from "../../components/SelectPokemon";

const Pokemon = ({ setIsPokemonOpen, page }) => {
  const { id } = useParams();
  const { pokeDetails: card, isLoading } = useDetails(id);
  const [slideEffect, setSlideEffect] = useState("up");


  useEffect(() => {
    setIsPokemonOpen(true);
  }, []);

  const addComma = (str) => {
    let newstr = str.slice(0, -1) + "." + str.slice(-1);
    newstr = parseFloat(newstr);
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
          <NavPokemonDetails id={id} setSlideEffect={setSlideEffect} />
          <Slide direction={slideEffect} in={true}>
            <section className="pokeDetailsBox">

              <div className="select-pokemon">
                <SelectPokemon
                  card={card}
                  id={id}
                />
              </div>

              <div className="close-button">
                <Link to={`/?page=${page}`}>
                  <Close
                    sx={{
                      cursor: "pointer",
                      color: "white",
                      background:
                        "linear-gradient(#ad2121 20%, rgb(202, 50, 12) 100%)",
                      borderRadius: "20%",
                      padding: "0.3rem",
                    }}
                  />
                </Link>
              </div>

              <div className="title">
                <h2 className={`${card.type1.toLowerCase()}`}>{card.name}</h2>
                <p>
                  <span style={{ color: "#727171" }}>
                    <i>#{helpAddZeros(id)}</i>
                  </span>
                </p>
              </div>

              <div className={`imgContainer ${card.type1.toLowerCase()}card`}>
                <img className="imgPokemon" src={card.img} alt="sprite" />
              </div>

              <div className="types">
                {card.type1 && (
                  <p className={`${card.type1.toLowerCase()} type`}>
                    {(card.type1)}
                  </p>
                )}
                {card.type2 && (
                  <p className={`${card.type2.toLowerCase()} type`}>
                    {(card.type2)}
                  </p>
                )}
              </div>

              <div className={"atributes"}>
                {card.weight && (
                  <Atributes
                    title={<b>Weight: </b>}
                    value={`${addComma(card.weight.toString())} kg`}
                  />
                )}
                {card.height && (
                  <Atributes
                    title={<strong>Height: </strong>}
                    value={`${card.height / 100} m`}
                  />
                )}
                {card.ability && (
                  <Atributes
                    title={<b>Ability: </b>}
                    value={(card.ability)}
                  />
                )}
                {card.habitat && (
                  <Atributes
                    title={<b>Habitat: </b>}
                    value={(card.habitat)}
                  />
                )}
                {card.color && (
                  <Atributes
                    title={<b>Color: </b>}
                    value={(card.color)}
                  />
                )}
                {card.generation && (
                  <Atributes
                    title={<b>Generation: </b>}
                    value={(card.generation)}
                  />
                )}
                {card.features.is_legendary && (
                  <Atributes title={<b>Legendary Pokémon</b>} value={""} />
                )}
                {card.features.is_mythical && (
                  <Atributes title={<b>Mythical Pokémon</b>} value={""} />
                )}
                {card.features.is_baby && (
                  <Atributes title={<b>Baby Pokémon</b>} value={""} />
                )}
              </div>

              <div className="description">
                <p className="description-text">{card.description}</p>
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
                        className={"evofinal"}
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
                <div className="no-evo">
                  <h3>
                    {helpFirstLetterUC(card.name)} does not come from or evolve
                    into any Pokémon.
                  </h3>
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
