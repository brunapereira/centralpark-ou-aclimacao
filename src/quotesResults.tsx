import React from "react"
import firebase from "gatsby-plugin-firebase"
import { useListVals } from "react-firebase-hooks/database"
import { makeStyles } from '@material-ui/core/styles'
import Fuse from 'fuse.js'

const useStyles = makeStyles({
  quotesList: {
    maxWidth: '600px',
    margin: '30px 0',
    paddingBottom: '2.5em'
  },
  blockquote: {
    background: '#ededed',
    borderLeft: '10px solid #ccc',
    padding: '.5em 10px',
    '&:before': {
      color: '#ccc',
      content: 'open-quote',
      fontSize: '3em',
      lineHeight: '.1em',
      marginRight: '.25em',
      verticalAlign: '-.3em',
    },
    '& small': {
      textAlign: 'right',
      display: 'inline-block',
      width: '100%'
    }
  },
})

interface QuoteRecord {
  value: string;
  labels: Array<string>;
  source: string;
}

function QuotesList(props) {
  const quotes = (props.quotes || []).filter(q => q.score < 0.6)
  const { searchTerms, labels } = props

  return (
    <div className={useStyles().quotesList}>
      {quotes
         .sort((a, b) => a.score - b.score)
         .map((q, i) => 
           <blockquote key={i} className={useStyles().blockquote}>
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

