
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/firebaseContext.tsx'

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </AuthProvider>

)
