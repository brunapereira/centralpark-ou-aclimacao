import React from 'react'
import SEO from '../seo'
import home from '../../static/home.jpg'

export default function Home() {
  return (
    <div id="root">
      <SEO title="Início" />
      <div id="main">
        <div className="title">
          <h2>Central Park <br/> ou Aclimação?</h2>
          <p>O Quiz!</p>
        </div>
        <button type="submit" className="startButton">Começar</button>
      </div>
    </div>
  )
}
