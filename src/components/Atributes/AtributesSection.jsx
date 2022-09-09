import React from 'react'
import { helpAddComma } from '../../helpers/helpAddComma'
import Atribute from './Atribute'
import './Atributes.css'

const AtributesSection = ({card}) => {
  return (
    <div className={"atributes"}>
                {card.weight && (
                  <Atribute
                    title="Weight"
                    value={`${helpAddComma(card.weight)} kg`}
                  />
                )}
                {card.height && (
                  <Atribute
                    title="Height"
                    value={`${helpAddComma(card.height)} m`}
                  />
                )}
                {card.ability && (
                  <Atribute
                    title="Ability"
                    value={card.ability}
                  />
                )}
                {card.habitat && (
                  <Atribute
                    title="Habitat"
                    value={card.habitat}
                  />
                )}
                {card.color && (
                  <Atribute
                    title="Color"
                    value={card.color}
                  />
                )}
                {card.generation && (
                  <Atribute
                    title="Generation"
                    value={card.generation}
                  />
                )}
                {card.features.is_legendary && (
                  <Atribute
                    title={""}
                    value="Legendary Pokémon"
                  />
                )}
                {card.features.is_mythical && (
                  <Atribute
                    title={""}
                    value="Mythical Pokémon"
                  />
                )}
                {card.features.is_baby && (
                  <Atribute
                    title={""}
                    value="Baby Pokémon"
                  />
                )}
              </div>

  )
}

export default AtributesSection