import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDcmfQr3wYUXjfrcTpjiPRSKd_g3YSeRvg",
  authDomain: "aveosoft-assignment.firebaseapp.com",
  projectId: "aveosoft-assignment",
  storageBucket: "aveosoft-assignment.appspot.com",
  messagingSenderId: "298505409770",
  appId: "1:298505409770:web:69d9d37cc78d8fa0b73393",
  measurementId: "G-27LBJ08M7Y"
};

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth}