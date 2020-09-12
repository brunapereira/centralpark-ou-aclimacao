import React from "react"
import firebase from "gatsby-plugin-firebase"
import { useListVals } from "react-firebase-hooks/database"

interface QuoteRecord {
  value: string;
  labels: Array<string>;
  source: string;
}

export default function QuotesResults(props) {
  const [snapshot, isLoading, error] = useListVals<QuoteRecord>(firebase.database().ref("/quotes"))
  return (
    <div>
      {error && <strong>Erro: {error}</strong>}
      {isLoading && <span>Buscando...</span>}
      {(!isLoading && snapshot) &&
          snapshot.filter(q => q.value.includes(props.searchTerms) || q.labels.find(l => l.includes(props.searchTerms))).map((q, i) => <p key={i}>{q.value}</p>)}
    </div>
  )
}

