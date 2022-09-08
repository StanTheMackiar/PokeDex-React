import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Card.css";

// Helpers
import { helpAddZeros } from "../../helpers/helpAddZeros";
import { Zoom } from "@mui/material";
import helpNamePokemons from "../../helpers/helpNamePokemons";

const Card = ({ type1, type2, id, img, name, transition, bg, imgBorder, titleEvolve, elements }) => {
  return (
    <Zoom in={true}>
      <section className={`card ${transition} ${type1} ${bg}`}>
        <Link to={`/pokemon/${id}`}>
          <div className={`imgBox ${imgBorder}`}>
            <img id={`${id}`} src={img} className="imgCard" alt="sprite" />
          </div>
        </Link>
        <p className={`titleCard ${titleEvolve}`}>{helpNamePokemons(name)}</p>
        <p className="idCard">
          <em>N.° {helpAddZeros(id)}</em>
        </p>
        {elements && <div className="elements">
          {type1 && (
            <span className={`${type1} element`}>
              {helpNamePokemons(type1)}
            </span>
          )}
          {type2 && (
            <span className={`${type2.toLowerCase()} element`}>
              {helpNamePokemons(type2)}
            </span>
          )}
        </div>}
      </section>
    </Zoom>
  );
};


Card.defaultProps = {
  bg: "bgColor",
  elements: true,
}

export default Card;
