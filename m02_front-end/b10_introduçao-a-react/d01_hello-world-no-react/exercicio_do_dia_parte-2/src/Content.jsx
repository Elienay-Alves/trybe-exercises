import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((cont) => (
        <div key={ cont.conteudo } className='card'>
          <p>O conteúdo é: {cont.conteudo }</p>
          <p>Status: { cont.status }</p>
          <p>Bloco: { cont.bloco }</p>
        </div>
      ))}
      </div>
      
    )
  }
}