

import { footerIcons, footerLink, navIcons } from '../data/data'
import './Footer.css'

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    footerLink.map(({ id, href, name }) => (
                        <li key={id}>
                            <a href={href} className="footer-link">{name}</a>
                        </li>
                    ))
                }

            </ul>
            <ul className="footer-icons">

                {
                    navIcons.map(({ id, href, iconClass }) => (
                        <li key={id}>
                            <a href={href} target="_blank" className="footer-icon"
                            ><i className={iconClass}></i
                            ></a>
                        </li>
                    ))
                }
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{date}</span> all rights reserved
            </p>
        </footer>
    )
}
export default Footer