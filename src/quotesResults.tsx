import React from "react"
import firebase from "gatsby-plugin-firebase"
import { useListVals } from "react-firebase-hooks/database"
import Fuse from 'fuse.js'

interface QuoteRecord {
  value: string;
  labels: Array<string>;
  source: string;
}

function QuotesList(props) {
  const { quotes } = props

  return (
    <div>
      {quotes
         .filter(q => q.score < 0.6)
         .sort((a, b) => a.score - b.score)
         .map((q, i) => <p key={i}>{q.item.value}</p>)}
      {!quotes.length ? <span>Sua busca não teve resultados</span> : ''}
    </div>
  )
}

export default function QuotesResults(props) {
  const [snapshot, isLoading, error] = useListVals<QuoteRecord>(firebase.database().ref("/quotes"))
  const searchOptions = {
    includeScore: true, 
    ignoreLocation: true,
    keys: ['value', { name: 'labels', weight: 0.3 }]
  }

  return (
    <div>
      {error && <strong>Erro: {error}</strong>}
      {isLoading && <span>Buscando...</span>}
      {
        (!isLoading && snapshot) &&
          <QuotesList quotes={
            new Fuse(snapshot, searchOptions).search(props.searchTerms) } />
      }
    </div>
  )
}

