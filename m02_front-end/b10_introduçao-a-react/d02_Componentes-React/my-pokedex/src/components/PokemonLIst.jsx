import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonList extends Component {
  render() {
    const { cards } = this.props;
    return(
      <div>
        { cards.map((card) => <PokemonCard key={ card.id } card={ card }/>) }
      </div>
    )
  }
} 