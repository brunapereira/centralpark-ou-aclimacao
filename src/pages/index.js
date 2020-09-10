import React from "react"
import * as firebase from "firebase/app"
import "firebase/analytics"
import "firebase/database"
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from "@react-firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBaEnpAJS4j3nAmhirc-mAptMATy-5wUy8",
  authDomain: "mitonaro-f6796.firebaseapp.com",
  databaseURL: "https://mitonaro-f6796.firebaseio.com",
  projectId: "mitonaro-f6796",
  storageBucket: "mitonaro-f6796.appspot.com",
  messagingSenderId: "247161612247",
  appId: "1:247161612247:web:02bd008c034d69d11b0d92",
  measurementId: "G-VV2ZHD36RM"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default function Home() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig} >
      <div>Hello world!
        <FirebaseDatabaseNode
          path="quotes/"
          limitToFirst={3}>
          {data => {
            const quotes = data.value
            if (quotes === null || typeof quotes === "undefined") return null
            return (
              <React.Fragment>
                {
                  quotes.map(q => <p>{q.value}</p>)
                }
              </React.Fragment>
            );
          }}
        </FirebaseDatabaseNode>
      </div>
    </FirebaseDatabaseProvider>
  )
}
