import React from "react"
import bozoGif from '../../static/mitonaro.gif'
import { makeStyles } from '@material-ui/core/styles'
import QuotesSearch from '../quotesSearch'

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
  img: {
    marginTop: '60px'
  }
})

export default function Home() {
  return (
    <div className={useStyles().root}>
      <img src={bozoGif} alt="Bozo" className={useStyles().img} />
      <h1>Mitonaro</h1>
      <QuotesSearch />
      <footer>Baseado em <a href="www.tronalddump.io">www.tronalddump.io</a></footer>
  </div>
  )
}
