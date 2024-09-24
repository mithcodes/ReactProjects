import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Success/>}/>
    <Route path="/*" element={<Error/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
