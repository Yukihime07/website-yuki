import SocialMedia from "./SocialMedia.jsx";
import Navigation from "./Navigation.jsx";
import { socialMedia } from "../data.js";
import './Footer.css';
import footerLogo from "../images/logo-footer.png";
import {NavLink} from 'react-router-dom';

export default function Footer(){
    return (
        <div className="footer-container">
            <Navigation/>

            <div className="social-media" >
                {socialMedia.map((social, index) => (
                    <SocialMedia key={index} {...social}/>
                ))}
            </div>
            <NavLink to="/"><img src={footerLogo} alt="" width={300} /></NavLink>
            
            <p>&copy; {new Date().getFullYear()} Starbucks. All rights reserved.</p>
        </div>
    )
}