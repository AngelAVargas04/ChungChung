import app from './firebase'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    useEffect(() => {
      console.log("firebase app: ", app);
    }, []);

}



export default App
