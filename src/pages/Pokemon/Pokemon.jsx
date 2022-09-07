// FrameWorks
import {
  Box,
  CircularProgress,
  Grow,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Css
import "./Pokemon.css";

// Hooks
import useDetails from "../../hooks/useDetails";
import { useNavigate, useParams } from "react-router-dom";

// Helpers
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";
import { helpAddZeros } from "../../helpers/helpAddZeros";

// Componente

const Pokemon = ({ setIsPokemonOpen }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokeDetails: card, isLoading } = useDetails(id);

  // Cuando isPokemonOpen es true, se desactivan los botones de paginacion
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
      {card && !isLoading && (
        <Grow in={true}>
          <section className="pokeDetailsBox">
            <ArrowBackIcon
              sx={{
                margin: "0.5rem",
                cursor: "pointer",
                background:
                  "linear-gradient(rgba(255,128,0,1) 1%, rgb(202, 50, 12) 100%)",
                borderRadius: "20%",
                padding: "0.5rem",
              }}
              onClick={() => navigate(-1)}
            />
            <h2 className="title">
              {helpFirstLetterUC(card.name)} <i>#{helpAddZeros(id)}</i>
            </h2>
            <div className="imgContainer">
              <img className="imgPokemon" src={card.img} alt="sprite" />
            </div>
            <div className="types">
              <h3 className="types-title">Type</h3>
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
            <section className="generation">
              <h3>{helpFirstLetterUC(card.generation)}</h3>
            </section>
            <div className="atributes">
              <h3>Atributes</h3>
              <p>
                <span className="atribute-title">Weight: </span>
                <span className="atribute-value">
                  {addComma(card.weight.toString())} kg
                </span>
              </p>
              <p>
                <span className="atribute-title">Height: </span>
                <span className="atribute-value">{card.height / 100} m</span>
              </p>
              <p>
                <span className="atribute-title">Ability: </span>
                <span className="atribute-value">
                  {helpFirstLetterUC(card.ability)}
                </span>
              </p>
              <p>
                <span className="atribute-title">Color: </span>
                <span className="atribute-value">
                  {helpFirstLetterUC(card.color)}
                </span>
              </p>
              <p>
                {card.habitat && (
                  <>
                    <span className="atribute-title">Habitat: </span>
                    <span className="atribute-value">
                      {helpFirstLetterUC(card.habitat)}
                    </span>
                  </>
                )}
              </p>
            </div>
            <div className="description">
              <h3>Description</h3>
              <p className="description-text">{card.description}</p>
            </div>
            <div className="features">
              <h3>Features</h3>
              <span className="feature">
                {" "}
                Is Legendary? {card.features.is_legendary ? "Yes" : "No"}
              </span>
              <span className="feature">
                {" "}
                Is Mythical? {card.features.is_mythical ? "Yes" : "No"}
              </span>
              <span className="feature">
                {" "}
                Is a Baby? {card.features.is_baby ? "Yes" : "No"}
              </span>
            </div>
            <section className="stats">
              <div className="progressbar">
                <span>HP</span>
                <LinearProgress variant="determinate" value={card.stats.hp} />
                <span>{card.stats.hp}</span>
              </div>
              <div className="progressbar">
                <span>Attack</span>
                <LinearProgress
                  variant="determinate"
                  value={card.stats.attack}
                />
                <span>{card.stats.attack}</span>
              </div>
              <div className="progressbar">
                <span>Defense</span>
                <LinearProgress
                  variant="determinate"
                  value={card.stats.defense}
                />
                <span>{card.stats.defense}</span>
              </div>
              <div className="progressbar">
                <span>Special Attack</span>
                <LinearProgress
                  variant="determinate"
                  value={card.stats.sp_attack}
                />
                <span>{card.stats.sp_attack}</span>
              </div>
              <div className="progressbar">
                <span>Special Defense</span>
                <LinearProgress
                  variant="determinate"
                  value={card.stats.sp_defense}
                />
                <span>{card.stats.sp_defense}</span>
              </div>
              <div className="progressbar">
                <span>Speed</span>
                <LinearProgress
                  variant="determinate"
                  value={card.stats.speed}
                />
              </div>
            </section>
          </section>
        </Grow>
      )}
    </section>
  );
};

export default Pokemon;
