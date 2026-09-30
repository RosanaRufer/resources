import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import App from './App.jsx'
import DefensePage from './pages/DefensePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="/resources.github.io">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/defense" element={<DefensePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
