
import { FaFacebookSquare, FaInstagram, FaLinkedin } 
from 'react-icons/fa'

import './styles.css';

export default function Footer() {

    return(
        <footer className="footer">
            <ul className= "social_list" >
                <li><a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            </ul>
            <p className="copy_right">
                <span>Agência Viaje!</span> &copy; 2022</p>
        </footer>
    )
}