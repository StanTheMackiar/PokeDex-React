import React from "react";

const Atribute = ({title, value}) => {
  return (
    <div className="atribute">
      <span className="atribute-title">{title}</span>
      <span className="atribute-value">{value}</span>
    </div>
  );
};

export default Atribute;
