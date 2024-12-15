import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
function App() {
  return (
    <div>
      <Router>
        <Routes >
          <Route path='/' element={<Home />}  />
          <Route path='/*' element={<NoPage />}  />
        </Routes>
      </Router>
    </div>
  )
}

export default App
