import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'
import FeedPage from './pages/FeedPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <FeedPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App