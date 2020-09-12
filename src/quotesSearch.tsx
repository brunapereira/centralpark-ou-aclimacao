import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import QuotesResults from './quotesResults'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  invisibleSubmit: {
    visibility: 'hidden'
  }
})

export default function QuotesSearch() {
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

