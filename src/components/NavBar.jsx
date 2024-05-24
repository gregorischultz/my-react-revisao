// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";


function NavBar ({pokemonIndex, setPokemonIndex, pokemonList}) {

const PokemonPrecedent = () => setPokemonIndex(pokemonIndex - 1);
const PokemonSuivant = () => setPokemonIndex(pokemonIndex + 1);


    return (
        <div>
            <nav>
        {pokemonIndex > 0 && (
       <button type='button' onClick={PokemonPrecedent}>Précédent</button>
       )}
       
       {pokemonIndex < pokemonList.length - 1 && (
       <button type='button' onClick={PokemonSuivant}>Suivant</button>
       )}
       </nav>
        </div>
    )
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.string.isRequired,
            imgSrc: PropTypes.string
        })
    ).isRequired,
};

export default NavBar;