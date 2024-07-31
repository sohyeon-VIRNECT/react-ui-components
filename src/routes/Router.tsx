import Home from '@/pages/Home'
import Test from '@/pages/Test'

import { Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/test" Component={Test} />
    </Routes>
  )
}

export default Router
