import React from 'react'

const Atributes = ({title, value}) => {
  return (

    <p>
      <span className="atribute-title">{title}</span>
      <span className="atribute-value">{value}</span>
    </p>
  )
}

export default Atributes