import app from './firebase'
import { useState, useEffect } from 'react'
import { Auth } from './components/auth'
import './index.css'

function App() {

    useEffect(() => {
      console.log("firebase app: ", app);
    }, []);

    // lets create something with our tailwindcss
  return (
    <div className="App">
      < Auth />

      
    </div>
  );
}



export default App
