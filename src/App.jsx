import React from 'react'
import { Link } from "react-router-dom";

import './App.css'

function App() {


  return (
    <>
    <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
