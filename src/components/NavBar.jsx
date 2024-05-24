// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";


function NavBar ({setPokemonIndex,  pokemonList}) {



    return (
        <div>
           {pokemonList.map((pokemon, index) => (
             <button
             type="button"
             onClick={() => {
                if(pokemon.name === "pikachu") {
                   alert("pika pikachu !!!");
                }
                setPokemonIndex(index)
            }}
             key={pokemon.name}
             >
                {pokemon.name} 
             </button>
           )
        )}
           
        </div>
    )
}

NavBar.propTypes = {
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.string.isRequired,
            imgSrc: PropTypes.string
        })
    ).isRequired,
};

export default NavBar;