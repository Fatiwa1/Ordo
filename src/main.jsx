import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './assets/components/data-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>,
)
