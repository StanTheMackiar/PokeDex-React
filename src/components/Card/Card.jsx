import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Card.css";

// Helpers
import { helpAddZeros } from "../../helpers/helpAddZeros";
import { helpFirstLetterUC } from "../../helpers/helpFirstLetterUC";
import { Zoom } from "@mui/material";

const Card = ({ type1, type2, id, img, name, transition }) => {
  return (
    <Zoom in={true}>
      <section className={`card ${transition} ${type1}card`}>
        <Link to={`/pokemon/${id}`}>
          <div className="imgBox">
            <img id={`${id}`} src={img} className="imgCard" alt="sprite" />
          </div>
        </Link>
        <p className="titleCard">{helpFirstLetterUC(name)}</p>
        <p className="idCard">
          <em>N.° {helpAddZeros(id)}</em>
        </p>
        <div className="elements">
          {type1 && (
            <span className={`${type1} element`}>
              {helpFirstLetterUC(type1)}
            </span>
          )}
          {type2 && (
            <span className={`${type2} element`}>
              {helpFirstLetterUC(type2)}
            </span>
          )}
        </div>
      </section>
    </Zoom>
  );
};

export default Card;
