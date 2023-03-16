import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import AdminPanel from './pages/AdminPanel'

function App () {
  return (
    <section className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=':panel' element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
