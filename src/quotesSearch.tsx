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
  const isSSR = typeof window === 'undefined'
  const searchParam = !isSSR && new URLSearchParams(window.location.search).get('busca')
  const [searchTerms, setSearchTerms] = useState(searchParam || '')

  const onSubmit = e => {
    e.preventDefault()
    if (isSSR) return

    const url = new URL(window.location)
    url.searchParams.set('busca', searchTerms)
    window.location.href = url.href
  }
  const onChange = e => {
    setSearchTerms(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={useStyles().root}>
        <TextField label="Buscar..." defaultValue={searchParam} value={searchTerms} onChange={onChange} variant="filled" autoFocus />
        <input type="submit" className={useStyles().invisibleSubmit} />
      </form>
      <QuotesResults searchTerms={searchParam} />
    </div>
  )
}

