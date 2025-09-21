// Firebase Context for sharing firebase utility
import { createContext } from 'react'
import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// The app will not work without this information. If you are seeing this
//  comment form GitHub you need to get your own firebase config details
const firebase = initializeApp(firebaseConfig);

const database = {
    ref: (location) => { console.log("hrmmm...") }
};

export const FirebaseContext = createContext()
export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ firebase, database }}>
      {children}
    </FirebaseContext.Provider>
  )
}
