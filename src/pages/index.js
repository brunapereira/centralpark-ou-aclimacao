import React from "react"
import bozoGif from '../../static/mitonaro.gif'
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
    '& footer': {
      position: 'fixed',
      width: '100%',
      textAlign: 'center',
      background: '#f9f9f9',
      bottom: '0',
      lineHeight: '2em',
      fontSize: '12px'
    }
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
  }
})

export default function Home() {
  return (
    <div className={useStyles().root}>
      <SEO />
      <div className={useStyles().titleSection}>
        <img src={bozoGif} alt="Bozo" className={useStyles().img} />
        <h1>Mitonaro</h1>
        <p>Arquivo de frases inéditas de Bozo</p>
      </div>
      <QuotesSearch />
      <footer>Baseado em <a href="www.tronalddump.io">www.tronalddump.io</a></footer>
    </div>
  )
}
