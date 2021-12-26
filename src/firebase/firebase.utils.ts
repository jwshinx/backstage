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

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any
) => {
  if (!userAuth) return

  console.log(`+++> firebase createUserProfileDocument userAuth:`, userAuth)
  console.log(
    `+++> firebase createUserProfileDocument additionalData:`,
    additionalData
  )
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // const userRef = firestore.doc(`users/slkdjflskjdfsdlkjf`)
  const snapShot = await userRef.get()
  console.log(`+++> firebase createUserProfileDocument 10:`, snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error: any) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).then((result) => {
    console.log('+++> firebase.utils signInWithGoogle result:', result)
  })

export default firebase
