import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProgressBar } from './components/progressBar.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressBar>
      <App />
    </ProgressBar>
  </StrictMode>,
)
