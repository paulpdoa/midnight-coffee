import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {

    const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main className="container mx-auto">
            <Navbar />
            <Outlet />
            <div className="bg-gray-200 h-[77px] w-full"></div>
            <Footer />
        </main> 
    )
}

export default Layout;