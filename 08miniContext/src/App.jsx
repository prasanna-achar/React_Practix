import { useState } from 'react'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider.jsx'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1> Hello world</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
