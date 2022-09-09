import { LinearProgress } from "@mui/material";
import React from "react";
import './Stats.css'

const MIN = 1;
const MAX = 300;

const Stats = ({ title, value }) => {
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  return (
    <div className="stats-grid">
      <span className="stats-title">{title}</span>
      <LinearProgress
        className="stats-bar"
        color="inherit"
        sx={{ color: "#133b85" }}
        variant="determinate"
        value={normalise(value)}
      />
      <span className="stats-value">{value}</span>
    </div>
  );
};

export default Stats;
