



import { navIcons, navLinks } from '../data/data'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src="/images/logo.svg" className="nav-logo" alt="back-roads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">

                    {navLinks.map(({ id, href, name }) => (
                        <li key={id}>
                            <a href={href} className='nav-link'>{name}</a>
                        </li>
                    ))}
                </ul>

                <ul className="nav-icons">
                    {navIcons.map(({ id, href, iconClass }) => (
                        <li key={id}>
                            <a href={href} target='_blank' className='nav-icon'>
                                <i className={iconClass}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar