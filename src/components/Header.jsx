import './Header.css';
import Navigation from "./Navigation";
import LogoImage from "../images/starbucks-logo-file.png";
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="header">
            <NavLink to="/"><img alt="Starbucks Logo" src={LogoImage} width={100} /></NavLink>
                <Navigation />
            </header>
            <hr/>
        </>
    )
}