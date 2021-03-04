import React, { useEffect } from 'react';
import registerResult from '../logic/registerResult'

export default function Result(props) {
  useEffect(() => {
    registerResult(10, props.totalPoints)
  })

  return (
    <>
      <p> Você acertou {props.totalPoints} de 10!</p>

      <div className="result">
      {(props.totalPoints <= 3)
        ? <p>Se te colocassem uma venda nos olhos, girassem três vezes <br/>e te soltassem dentro de um dos parques, você não saberia <br/>que idioma usar para pedir informação. <br/>Na sua opinião, é um trabalho impecável da prefeitura de <br/>São Paulo para deixar a cidade com a cara da "The big Apple".</p>
        : <div/>}
      </div>

      <div className="result">
        {(props.totalPoints > 3 && props.totalPoints < 8)
          ? <p>Tem suas similaridades, vai. <br/> Olhando assim desse ângulo até que dá pra confundir. <br/>Dica: escolha um desses pontos e poste um #TBT em NYC :) </p>
          : <div/>}
      </div>

      <div className="result">
        {(props.totalPoints >= 8)
          ? <p>Todo o trabalho para criar essa brincadeira foi em vão, <br/> porque não há NENHUMA similaridade entre esses dois parques. <br/> <br/> Vou fingir que eu nunca tive essa ideia e tirar o meu nome <br />do rodapé desta página.</p>
          : <div/>}
      </div>
    </>
  )
}
