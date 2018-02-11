import { firebase, googleAuthProvider } from '../firebase/firebase'

export const startLogin = () => {
  // return so we can have it chain promises
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}
