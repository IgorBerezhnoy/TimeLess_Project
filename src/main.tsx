import React from 'react'
import { Provider } from 'react-redux'

import { App } from '@/App'
import { store } from '@/services/store'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource-variable/jura'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
