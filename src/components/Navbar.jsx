import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Home
      </NavLink>
      <NavLink to="/another" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Another Page
      </NavLink>
    </nav>
  )
}

export default Navbar
