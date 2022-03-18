import logo from '../../img/logoviajepqn.png';
import { FaFacebookSquare, FaInstagram, FaLinkedin }
  from 'react-icons/fa'
import { Link } from 'react-router-dom';


import './styles.css'

export default function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="viaje-nav-content">
          <Link to="/">
            <img src={logo} alt="AgênciaViaje!" />
          </Link>
          <div className="viaje-contact-container">
            <ul className="social-list" >
              <li><a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}