import { LinearProgress } from "@mui/material";
import React from "react";

const MIN = 1;
const MAX = 300;

const Stats = ({title, value}) => {

  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  return (
    <div className="progressbar">
      <span>{title}</span>
      <LinearProgress color="inherit" sx={{color: "#133b85"}} variant="determinate" value={normalise(value)} />
      <span>{value}</span>
    </div>
  );
};

export default Stats;
