import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import React from "react";
import { useNavigate } from "react-router-dom";
import helpGetID from "../helpers/helpGetID";
import helpNamePokemons from "../helpers/helpNamePokemons";

const SelectPokemon = ({ card, id }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/pokemon/${e.target.value}`);
  };

  return (
    <div className="select-pokemon">
      {card.varieties.length > 1 && (
        <div className="select">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="form">Form</InputLabel>
            <Select
              labelId="form"
              value={id}
              onChange={handleChange}
              label="Form"
            >
              {card.varieties.map((el) => {
                const idForm = helpGetID(el.pokemon.url);
                return (
                  <MenuItem key={crypto.randomUUID()} value={idForm}>
                    {helpNamePokemons(el.pokemon.name)}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default SelectPokemon;
