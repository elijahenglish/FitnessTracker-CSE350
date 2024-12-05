import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const scrollToCalculators = () => {
        setTimeout(() => {
            const element = document.getElementById('calculators-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#" onClick={scrollToCalculators}>Features</a></li>
                <li className="navbar-item"><Link to="/workouts">Workouts of the Week</Link></li>
                <li className="navbar-item"><Link to="/best-foods">Best Foods For Diets</Link></li>
                <li className="navbar-item"><Link to="/contact">Contact Us</Link></li> 
            </ul>
        </nav>
    );
}

export default Navbar;
