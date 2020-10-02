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
  const quotes = (props.quotes || []).filter(q => q.score < 0.6)
  const { searchTerms, labels } = props

  return (
    <div id="quotesList">
      {quotes
         .sort((a, b) => a.score - b.score)
         .map((q, i) => 
           <blockquote key={i} className="blockquote">
             {q.item.value} 
             {q.item.source && <small><a href={q.item.source}>Fonte</a></small>}
           </blockquote>
         )}
      {!quotes.length && searchTerms && <span>Sua busca não teve resultados</span>}
      {!quotes.length &&
        <p>Veja o que Bozo tem a dizer sobre:  
          {labels.map((l, i) => 
            <span key={i}>{i > 0 && ","} <a href={`?busca=${l}`}>{l}</a></span>)}
        </p>
       }
    </div>
  )
}

export default function QuotesResults(props) {
  const isSSR = typeof window === 'undefined'
  const { searchTerms } = props
  const [snapshot, isLoading, error] = isSSR ? [] : useListVals<QuoteRecord>(firebase.database().ref("/quotes"))
  const options = {
    includeScore: true, 
    ignoreLocation: true,
    keys: ['value', { name: 'labels', weight: 0.3 }]
  }

  return (
    <div>
      {error && <strong>Erro: {error}</strong>}
      {isLoading && searchTerms && <span>Buscando...</span>}
      {(!isLoading && snapshot) &&
        <QuotesList 
          searchTerms={searchTerms}
          labels={[...new Set(snapshot.map(s => s.labels).flat())]}
          quotes={searchTerms && new Fuse(snapshot, options).search(searchTerms) } />}
    </div>
  )
}

