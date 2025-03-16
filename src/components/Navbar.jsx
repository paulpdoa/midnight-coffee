import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const links = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Product', link: '/product' },
        { id: 3, name: 'About Us', link: '/about-us' },
    ];

    const location = useLocation();
    const logo = location.pathname === '/product' ? '/logo-white.png' : '/logo.png';

    return (
        <nav className="z-50 relative">
            <div className="flex justify-between mx-10">
                <img className="w-[20%]" src={logo} alt="Midnight Coffee Logo" />
                <ul className="flex gap-10 items-center">
                    { links.map(link => (
                        <li key={link.id}>
                            <Link className={`font-semibold cursor-pointer text-base ${location.pathname === '/product' ? 'text-white' : 'text-black'}`} to={link.link}>
                                {link.name}
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;