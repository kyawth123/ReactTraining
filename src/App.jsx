import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TodoListPage from './pages/TodoListPage'
import AnotherPage from './AnotherPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/another" element={<AnotherPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
