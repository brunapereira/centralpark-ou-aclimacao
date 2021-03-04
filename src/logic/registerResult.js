import firebase from 'gatsby-plugin-firebase'

const registerResult = async (total, points) => {
  console.log(total, points)
  const ref = firebase.database().ref('/results')

  ref.set({total, points})
}

export default registerResult
