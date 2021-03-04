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
          <p>O Quiz!</p>
        </div>
        <Link to="/quiz" className="startButton">Começar</Link>
      </div>
    </div>
  )
}
