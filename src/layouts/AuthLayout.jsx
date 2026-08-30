import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
      <div style={{ width: '400px', padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
