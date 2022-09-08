import { LinearProgress } from "@mui/material";
import React from "react";

const MIN = 1;
const MAX = 200;

const Stats = ({title, value}) => {

  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  return (
    <div className="progressbar">
      <span>{title}</span>
      <LinearProgress color="inherit" sx={{color: "#133b85"}} variant="determinate" value={value < 200 ? normalise(value) : 200} />
      <span>{value}</span>
    </div>
  );
};

export default Stats;
