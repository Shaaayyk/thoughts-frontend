import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'
import FeedPage from './pages/FeedPage'
import SignupPage from './pages/SignupPage'

import userUtil from './utils/user.js'

function App() {
  const [user, setUser] = useState(userUtil.getUser())
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout  />}>
          <Route index element={<FeedPage />} />
          <Route path='/signup' element={<SignupPage setUser={setUser} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App