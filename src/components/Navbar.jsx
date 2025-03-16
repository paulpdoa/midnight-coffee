import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Product', link: '/product' },
        { id: 3, name: 'About Us', link: '/about-us' },
    ];

    const location = useLocation();
    const logo = location.pathname === '/product' ? '/logo-white.png' : '/logo.png';
    const linkColor = location.pathname === '/product' ? 'text-white' : 'text-black';

    return (
        <nav className="z-50 relative">
            <div className="flex justify-between items-center mx-6 py-4">
                <img className="w-[40%] sm:w-[20%]" src={logo} alt="Midnight Coffee Logo" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 items-center">
                    {links.map(link => (
                        <li key={link.id}>
                            <Link className={`font-semibold cursor-pointer text-base ${linkColor}`} to={link.link}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Button */}
                <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} className={linkColor} /> : <Menu size={28} className={linkColor} />}
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-16 right-0 bg-white w-48 shadow-md rounded-md transition-all z-[9999] ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} md:hidden`}>
                    <ul className="flex flex-col p-4 gap-4 z-[1000px]">
                        {links.map(link => (
                            <li key={link.id} onClick={() => setIsOpen(false)}>
                                <Link className={`font-semibold text-base text-black z-50`} to={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
