import React from 'react'
import '../index.css';


const Header = ({toggleMenu}) => {
    return (
        <header className="header ">
            
                <div className="barra">
                    <h2>croudfund</h2>
                    <nav className="navegacion">
                        <a href="/index"> About</a>
                        <a href="/index">Discover</a>
                        <a href="/index ">Get Started</a>
                    </nav>
                </div>
                <div className="menu_barras" onClick={() => toggleMenu()}>
                    <div className="hamburger ">
                        <div className="_layer -top"></div>
                        <div className="_layer -mid"></div>
                        <div className="_layer -bottom"></div>
                    </div>

                
            </div>
            <nav className="menuppal ">
                    <ul>
                        <li><a href="/index">About </a></li>
                        <li><a href="/index">Discover </a></li>
                        <li><a href="/index">Get Started</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header
