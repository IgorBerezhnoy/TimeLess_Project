import React from 'react'

import { App } from '@/App'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/600.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
