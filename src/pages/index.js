import React from "react"
import bozoGif from '../../static/bozonaro.gif'
import QuotesSearch from '../quotesSearch'
import SEO from '../seo'

export default function Home() {
  return (
    <div id="root">
      <SEO title="Início" />
      <div id="titleSection">
        <img src={bozoGif} alt="Bozo" />
        <h1>Bozonaro</h1>
        <p>Arquivo de frases inéditas de Bozo</p>
      </div>
      <QuotesSearch />
      <footer>
        <div>Quer contribuir ou sugerir frases? Vem pro nosso <a target="_blank" rel="noreferrer" href="https://github.com/bozonaro-web-app">github</a></div>
        <div>Baseado em <a target="_blank" href="https://www.tronalddump.io" rel="noreferrer">www.tronalddump.io</a></div>
      </footer>
    </div>
  )
}
