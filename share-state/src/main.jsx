import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SyncedInputs from './SyncedInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SyncedInputs></SyncedInputs>
  </StrictMode>,
)
