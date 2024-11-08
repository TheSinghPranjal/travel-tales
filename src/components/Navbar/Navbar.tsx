import Link from 'next/link';
import './Navbar.css';

const menuItems = [
    { fieldName: 'Dashboard', route: '/protectedRoutes/dashboard' },
    { fieldName: 'Home', route: '/protectedRoutes/homePage' },
    { fieldName: 'About', route: '/protectedRoutes/trips' },
    { fieldName: 'Vastrai', route: '/vastrai' },
    { fieldName: 'Test', route: '/test' },
    // { fieldName: 'Profile', route: '/protectedRoutes/profile' }
];

const NavApp = () => {
    return (
        <div className='navContainer'>
            <nav className='navbar'>
                <div className='logo'>
                    <img src="../assets/logotraveltales.png" alt="Company Logo" />
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
