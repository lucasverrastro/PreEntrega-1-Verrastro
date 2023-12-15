import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC70zkXnoDlm69QzZTmqAwUhngXNMSE5rY",
  authDomain: "proyectofinal-verrastro.firebaseapp.com",
  projectId: "proyectofinal-verrastro",
  storageBucket: "proyectofinal-verrastro.appspot.com",
  messagingSenderId: "366465946045",
  appId: "1:366465946045:web:8849219690b73b9b9702d4",
  measurementId: "G-JW9TZN738Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
