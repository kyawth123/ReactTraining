import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '1rem' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Home
        </NavLink>
        <NavLink to="/another" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Another Page
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
