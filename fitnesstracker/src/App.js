import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator';
import CalorieCalculator from './components/CalorieCalculator';
import CaloriesBurnedCalculator from './components/CaloriesBurnedCalculator';
import WorkoutsOfWeek from './components/WorkoutsOfWeek';
import BestFoodsForDiets from './components/BestFoodsForDiets';
import ContactUs from './components/ContactUs'; 
import './styles.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Hero />
                        <Features />
                        <Testimonials />
                        <section id="calculators-section">
                            <BMICalculator />
                            <CaloriesBurnedCalculator />
                            <CalorieCalculator />
                        </section>
                        <Footer />
                    </>
                } />
                <Route path="/workouts" element={<WorkoutsOfWeek />} />
                <Route path="/best-foods" element={<BestFoodsForDiets />} />
                <Route path="/contact" element={<ContactUs />} /> 
            </Routes>
        </Router>
    );
}

export default App;
