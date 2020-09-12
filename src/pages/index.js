import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"
import TextField from '@material-ui/core/TextField'
import bozoGif from '../../static/mitonaro.gif'
import { makeStyles } from '@material-ui/core/styles'
import { useListVals } from "react-firebase-hooks/database"

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
  },
  invisibleSubmit: {
    visibility: 'hidden'
  }
})

function QuotesResults(props) {
  const [snapshot, isLoading, error] = useListVals(firebase.database().ref("/quotes"))
  return (
    <div>
      {error && <strong>Erro: {error}</strong>}
      {isLoading && <span>Buscando...</span>}
      {(!isLoading && snapshot) &&
          snapshot.filter(q => q.value.includes(props.searchTerms) || q.labels.find(l => l.includes(props.searchTerms))).map((q, i) => <p key={i}>{q.value}</p>)}
    </div>
  )
}

function QuotesSearch() {
  const [searchTerms, setSearchTerms] = useState('')
  const [showResults, setShowResults] = useState(false)

  const onSubmit = e => {
    e.preventDefault()
    setShowResults(true)
  }
  const onChange = e => setSearchTerms(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit} className={useStyles().root}>
        <TextField label="Buscar..." value={searchTerms} onChange={onChange} variant="filled" />
        <input type="submit" className={useStyles().invisibleSubmit} />
      </form>
      {showResults && <QuotesResults searchTerms={searchTerms}/>}
    </div>
  )
}

export default function Home() {
  return (
    <div className={useStyles().root}>
      <img src={bozoGif} alt="Bozo" className={useStyles().img} />
      <h1>Mitonaro</h1>
      <QuotesSearch />
  </div>
  )
}
