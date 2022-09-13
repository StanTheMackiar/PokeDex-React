// FrameWorks
import { CircularProgress, Slide } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

// Css
import "./Pokemon.css";

// Hooks
import useDetails from "../../hooks/useDetails";
import { Link, useNavigate, useParams } from "react-router-dom";

// Helpers
import { helpAddZeros } from "../../helpers/helpAddZeros";

// Componentes
import Card from "../../components/Card/Card";
import AtributesSection from "../../components/Atributes/AtributesSection";
import StatsSection from "../../components/Stats/StatsSection";
import NavPokemonDetails from "../../components/NavPokemonDetails";
import Message from "../../components/Message";
import SelectPokemon from "../../components/SelectPokemon";
import helpNamePokemons from "../../helpers/helpNamePokemons";
import SearchContext from "../../context/SearchContext";

const Pokemon = ({ setIsPokemonOpen }) => {
  const { id } = useParams();
  const { pokeDetails: card, isLoading } = useDetails(id);
  const [slideEffect, setSlideEffect] = useState("up");
  const navigate = useNavigate();
  const { page } = useContext(SearchContext)

  useEffect(() => {
    setIsPokemonOpen(true);
  }, [setIsPokemonOpen]);

  const buttonStyles = {
    cursor: "pointer",
    color: "white",
    background: "linear-gradient(#ad2121 20%, rgb(202, 50, 12) 100%)",
    borderRadius: "20%",
    padding: "0.3rem",
  };

  const arrowStyles = {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.178)",
    padding: "0.5rem",
    borderRadius: "0.3rem",
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
          {/* Botones navegacion */}
          <NavPokemonDetails
            id={id}
            setSlideEffect={setSlideEffect}
          />
          {/* Transicion */}
          <Slide
            direction={slideEffect}
            in={true}>


            {/* Contenedor principal */}
            <section className="pokeDetailsBox">
              <div className="back-button">
                <KeyboardReturnIcon
                  sx={buttonStyles}
                  onClick={() => navigate(-1)}
                />
              </div>

              <div className="close-button">
                <Link to={`/?page=${page}`}>
                  <Close sx={buttonStyles} />
                </Link>
              </div>

              <div className="title">
                <h2>
                  {card.name}{" "}
                  <span style={{ color: "#727171" }}>
                    <i>#{helpAddZeros(id)}</i>
                  </span>
                </h2>
              </div>

              <SelectPokemon card={card} id={id}/>

              <div className={`imgContainer ${card.type1} bgColor`}>
                <img
                  className="imgPokemon"
                  src={card.img}
                  alt="sprite"
                />
              </div>

              <div className="types">
                {card.type1 && (
                  <p className={`${card.type1} type`}>
                    {helpNamePokemons(card.type1)}
                  </p>
                )}
                {card.type2 && (
                  <p className={`${card.type2} type`}>
                    {helpNamePokemons(card.type2)}
                  </p>
                )}
              </div>

              <AtributesSection card={card} />

              <div className="description">
                <p className="description-text">{card.description}</p>
              </div>

              <StatsSection card={card} />
              
              {card.evo_chain && (
                <div className="evochain">
                  <h3>Evolutions</h3>
                  {card.evo_chain[0] && (
                    <div className="evo-unique" key={crypto.randomUUID()}>
                      <Card
                        key={crypto.randomUUID()}
                        img={card.evo_chain[0].img}
                        name={card.evo_chain[0].name}
                        id={card.evo_chain[0].id}
                        type1={card.evo_chain[0].type1}
                        type2={card.evo_chain[0].type2}
                        transition={"no-transition"}
                        bg={"no-bg"}
                        imgBorder={"img-border"}
                        titleEvolve={"title-evolve"}
                      />
                    </div>
                  )}
                  {card.evo_chain[1] && (
                    <>
                      <div className="arrow-evo">
                        <KeyboardDoubleArrowDownIcon sx={arrowStyles} />
                      </div>

                      {card.evo_chain[1].map((el) => {
                        return (
                          <div
                            className={
                              card.evo_chain[1].length > 1
                                ? "evo-various"
                                : "evo-unique"
                            }>
                            <Card
                              key={crypto.randomUUID()}
                              img={el.img}
                              name={el.name}
                              id={el.id}
                              type1={el.type1}
                              type2={el.type2}
                              transition={"no-transition"}
                              bg={"no-bg"}
                              imgBorder={"img-border"}
                              titleEvolve={"title-evolve"}
                            />
                          </div>
                        );
                      })}
                    </>
                  )}
                  {card.evo_chain[2] && (
                    <>
                      <div className="arrow-evo">
                        <KeyboardDoubleArrowDownIcon sx={arrowStyles} />
                      </div>

                      {card.evo_chain[2].map((el) => {
                        return (
                          <div
                            className={
                              card.evo_chain[2].length > 1
                                ? "evo-various"
                                : "evo-unique"
                            }>
                            <Card
                              key={crypto.randomUUID()}
                              img={el.img}
                              name={el.name}
                              id={el.id}
                              type1={el.type1}
                              type2={el.type2}
                              transition={"no-transition"}
                              bg={"no-bg"}
                              imgBorder={"img-border"}
                              titleEvolve={"title-evolve"}
                            />
                          </div>
                        );
                      })}
                    </>
                  )}
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
