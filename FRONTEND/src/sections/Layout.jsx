import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
    return (
        <>
            <div className='flex flex-col justify-between'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout
