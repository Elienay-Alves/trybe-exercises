import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonCard extends Component {

  render() {
    const { card: {
      name,
      type,
      averageWeight: {
        value,
        measurementUnit
      },
      image
    } } = this.props;
    
    return (
      <div>
        <p> Nome: { name }</p>
        <p>Tipo: { type }</p>
        <p>Peso: { value } { measurementUnit }</p>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}

PokemonCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}