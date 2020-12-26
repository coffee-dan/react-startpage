import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { FirebaseContext } from './context/firebase'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import './index.css'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// The app will not work without this information. If you are seeing this
//  comment form GitHub you need to get your own firebase config details
const firebase = window.firebase.initializeApp(
	JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
)

console.log(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG))

const database = firebase.database()

ReactDOM.render(
	<React.StrictMode>
		<FirebaseContext.Provider
			value={{ firebase: window.firebase, database: database }}
		>
			<App />
		</FirebaseContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
