import React from "react";
import Stats from "./Stats";

const StatsSection = ({ card }) => {
  return (
    <div className="stats-section">
      <Stats
        title="HP"
        value={card.stats.hp}
      />
      <Stats
        title="Attack"
        value={card.stats.attack}
      />
      <Stats
        title="Defense"
        value={card.stats.defense}
      />
      <Stats
        title="Special Attack"
        value={card.stats.sp_attack}
      />
      <Stats
        title="Special Defense"
        value={card.stats.sp_defense}
      />
      <Stats
        title="Speed"
        value={card.stats.speed}
      />
    </div>
  );
};

export default StatsSection;
