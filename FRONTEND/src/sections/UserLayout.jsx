import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function UserLayout() {
    return (
        <>
            <div className='flex flex-col relative'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default UserLayout
