import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const AppLayout = () => {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr' }}>
        <Sidebar />
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
