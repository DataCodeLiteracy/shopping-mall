import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCq29cvWJpdXBOGH7WX30OQlVQPPv8Q1j8',
  authDomain: 'dream-react-shopping.firebaseapp.com',
  databaseURL:
    'https://dream-react-shopping-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'dream-react-shopping',
  storageBucket: 'dream-react-shopping.appspot.com',
  messagingSenderId: '187915634889',
  appId: '1:187915634889:web:0e17fb25e34902dc826518',
  measurementId: 'G-WHYDTJERHT'
}

export const initializeFirebase = () => {
  console.log('Initializing Firebase')
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  const auth = getAuth(app)
  return app
}

export const createUserEmailAndPassword = async (
  email: string,
  password: string,
  name: string
) => {
  const auth = getAuth()

  await createUserWithEmailAndPassword(auth, email, password)
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: '/images/user.png'
    })
  }
}

export const loginUser = async (email: string, password: string) => {
  const auth = getAuth()

  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  const user = userCredential.user
  const accessToken = await user.getIdToken()

  return accessToken
}

export const onUserStateChanged = (
  callback: React.Dispatch<React.SetStateAction<User | null>>
) => {
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    callback(user)
  })
}
