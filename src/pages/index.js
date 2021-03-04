import React from 'react'
import SEO from '../seo'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div id="root">
      <SEO title="Início" />
      <div id="main">
        <div className="title">
          <h2>Central Park <br/> ou Aclimação?</h2>
          <h4>O Quiz!</h4>
        </div>
        <Link to="/quiz" className="startButton">Começar</Link>
      </div>
      <footer>
        Feito com &hearts; por <a href="https://github.com/brunapereira">Bruna Pereira</a>
      </footer>
    </div>
  )
}
