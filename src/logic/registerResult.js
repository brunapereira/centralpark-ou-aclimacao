import firebase from 'gatsby-plugin-firebase'
import { v4 as uuidv4 } from 'uuid';

const registerResult = async (total, points) => {
  const ref = firebase.database().ref(`/results/${uuidv4()}`)

  ref.set({total, points})
}

export default registerResult
