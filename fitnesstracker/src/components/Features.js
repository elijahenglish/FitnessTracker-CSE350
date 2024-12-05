import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
    return (
        <section id="features" className="features">
            <div className="feature-item">
                <Link to="/workouts">
                    <button className="feature-button">Workouts of the Week</button>
                </Link>
                <p className="feature-description">Discover a new set of effective workouts every week to keep your fitness routine exciting and challenging.</p>
            </div>
            <div className="feature-item">
                <Link to="/best-foods">
                    <button className="feature-button">Best Foods for Different Diets</button>
                </Link>
                <p className="feature-description">Find out the best foods to eat for various diets, whether you're looking to lose weight, build muscle, or maintain a healthy lifestyle.</p>
            </div>
        </section>
    );
}

export default Features;
