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
    fontFamily: 'OCR A Std, monospace'
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
  </div>
  )
}
