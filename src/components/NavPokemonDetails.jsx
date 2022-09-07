import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const NavPokemonDetails = ({ id, setSlideEffect }) => {
  const style = {
    background: `linear-gradient(
        338deg,
        rgba(164, 14, 14, 1) 0%,
        #811010 100%
      )`,
    boxShadow: "2px 2px 5px rgb(87, 17, 17)",
    color: "yellow",
    padding: "5rem 0.5rem",
    position: "fixed",
    zIndex: "999",
    top: "50%",
  };
  let left = { left: 0, borderRadius: "0 0.3rem 0.3rem 0" };
  let right = { right: 0, borderRadius: "0.3rem 0 0 0.3rem" };
  left = { ...style, ...left };
  right = { ...style, ...right };

  return (
    <>
      {parseInt(id) > 1 && (
        <Link to={`/pokemon/${parseInt(id) - 1}`}>
          <ArrowBackIos sx={left} onClick={() => setSlideEffect("right")} />
        </Link>
      )}
      {parseInt(id) < 905 && (
        <Link to={`/pokemon/${parseInt(id) + 1}`}>
          <ArrowForwardIos sx={right} onClick={() => setSlideEffect("left")} />
        </Link>
      )}
    </>
  );
};

export default NavPokemonDetails;
