import Link from 'next/link';
import './Navbar.css';

const menuItems = [
    { fieldName: 'Home', route: '/protectedRoutes/homePage' },
    { fieldName: 'About', route: '/protectedRoutes/trips' },
    { fieldName: 'Contact', route: '/protectedRoutes/homePage' },
    { fieldName: 'Trips', route: '/protectedRoutes/trips' },
    { fieldName: 'Profile', route: '/protectedRoutes/profile' }
];

const NavApp = () => {
    return (
        <div className='navContainer'>
            <nav className='navbar'>
                <div className='logo'>
                    <img src="/path/to/logo.png" alt="Company Logo" />
                    <span className='companyName'>Travel Tales</span>
                </div>
                <ul className='navMenu'>
                    {menuItems.map((item) => (
                        <li key={item.fieldName} className='navItem'>
                            <Link legacyBehavior href={item.route}>
                                <a className='navLink'>{item.fieldName}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavApp;
