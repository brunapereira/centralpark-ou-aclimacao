import React from "react"
import bozoGif from '../../static/bozonaro.gif'
import { makeStyles } from '@material-ui/core/styles'
import QuotesSearch from '../quotesSearch'
import SEO from '../seo'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'OCR A Std, monospace',
    position: 'relative',
    minHeight: '100vh',
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '30px 0',
    '& h1': { margin: '10px' },
    '& p': { margin: '0' },
    '& img': { margin: '40px' }
  },
  footer: {
    position: 'absolute',
    textAlign: 'center',
    bottom: '0',
    height: '2.5em',
    lineHeight: '1.4em',
    fontSize: '12px',
    marginRight: '10px'
  }
})

export default function Home() {
  return (
    <div className={useStyles().root}>
      <SEO title="Início" />
      <div className={useStyles().titleSection}>
        <img src={bozoGif} alt="Bozo" className={useStyles().img} />
        <h1>Bozonaro</h1>
        <p>Arquivo de frases inéditas de Bozo</p>
      </div>
      <QuotesSearch />
      <footer className={useStyles().footer}>
        <div>Quer contribuir ou sugerir frases? Vem pro nosso <a target="_blank" rel="noreferrer" href="https://github.com/bozonaro-web-app">github</a></div>
        <div>Baseado em <a target="_blank" href="https://www.tronalddump.io" rel="noreferrer">www.tronalddump.io</a></div>
      </footer>
    </div>
  )
}
