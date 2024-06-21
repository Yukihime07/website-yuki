import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css"

export default function Navigation() {
	return (
		<>
            <nav className='navContainer'>
                <ul className='navList'>
                    <li className='navLink'><NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li className='navLink'><NavLink to="/gallery"  className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink> </li>
                    <li className='navLink'><NavLink to="/about"  className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink> </li>
                    <li className='navLink'><NavLink to="/contact"  className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink> </li>
                </ul>
            </nav>
		</>
	);
}