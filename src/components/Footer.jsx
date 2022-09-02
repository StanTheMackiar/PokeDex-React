import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.section`
    background-color: rgba(255, 8, 8, 0.199);
    text-align: center;
    padding: 1rem;
    font-size: 18px;
    color: rgba(255, 239, 19, 0.925);
    margin-top: 4rem;
    font-weight: bold;
`

const Footer = () => {
  return (
    <FooterSection>
        <p>Data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeApi</a></p>
    </FooterSection>
  )
}

export default Footer