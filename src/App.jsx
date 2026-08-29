import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import TodoListPage from './pages/TodoListPage'
import AnotherPage from './AnotherPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <TodoListPage /> },
      { path: '/another', element: <AnotherPage /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
