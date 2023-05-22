import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './page/Login'
import Card from './page/Card'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/card" element={<Card />} />
      <Route path='*' element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App
