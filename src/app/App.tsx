import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import '../styles/index.css'

// صفحه ساده برای تست
function Home() {
  return <div style={{ padding: '20px', color: 'white' }}>XOLabs is Working! 🚀</div>
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
