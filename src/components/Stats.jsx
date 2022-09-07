import { LinearProgress } from "@mui/material";
import React from "react";

const Stats = ({title, value}) => {
  return (
    <div className="progressbar">
      <span>{title}</span>
      <LinearProgress variant="determinate" value={value} />
      <span>{value}</span>
    </div>
  );
};

export default Stats;
