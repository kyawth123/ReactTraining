import { createBrowserRouter, redirect } from 'react-router-dom'
import useAuthStore from '../stores/authStore'
import AppLayout from '../layouts/AppLayout'
import AuthLayout from '../layouts/AuthLayout'
import TodoListPage from '../pages/TodoListPage'
import AnotherPage from '../pages/AnotherPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'

const protectedLoader = () => {
  const { isAuthenticated } = useAuthStore.getState()
  if (!isAuthenticated) {
    return redirect('/login')
  }
  return null
}

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },
  {
    path: '/',
    loader: protectedLoader,
    element: <AppLayout />,
    children: [
      { index: true, element: <TodoListPage /> },
      { path: 'another', element: <AnotherPage /> },
    ],
  },
])
