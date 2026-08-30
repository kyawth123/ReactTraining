import useAuthStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ margin: 0 }}>Training App</h2>
      <button onClick={handleLogout}>Logout</button>
    </header>
  )
}

export default Header
