import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'

import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*Remove strict-mode in the end of the project*/
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
