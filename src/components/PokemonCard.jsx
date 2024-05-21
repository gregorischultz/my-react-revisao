// eslint-disable-next-line no-unused-vars
import React from "react";





function PokemonCard ({ pokemon }) {
    
    return (
        <figure>
        {pokemon.imgSrc != null ? ( //aqui eu coloco a condiçao que se a imagem do pokemon for  diferente de null ou img existente, voce vai mostrar tal imagem
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : ( // e aqui os dois pontos vai significar "se nao" mostre "???"
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    )
}

export default PokemonCard;