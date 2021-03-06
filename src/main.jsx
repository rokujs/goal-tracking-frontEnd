import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.css'

import App from './App'
import { UserContextProvider } from '@/context/userContext'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
