import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyDbkQZrWSeaQYOXgWnaN8HpKqXdL_kvkOA',
  authDomain: 'backstage-b49c3.firebaseapp.com',
  projectId: 'backstage-b49c3',
  storageBucket: 'backstage-b49c3.appspot.com',
  messagingSenderId: '986597943886',
  appId: '1:986597943886:web:d2dfde9c5806891c27f11f',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
