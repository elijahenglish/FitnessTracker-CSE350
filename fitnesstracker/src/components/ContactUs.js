import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
    const [contactType, setContactType] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log({ contactType, name, phone, email, message });
    };

    return (
        <section className="contact-us">
            <div className="home-button-container">
                <Link to="/" className="home-button">Home</Link>
            </div>
            {!submitted ? (
                <>
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="contactType">I want to:</label>
                            <select
                                id="contactType"
                                value={contactType}
                                onChange={(e) => setContactType(e.target.value)}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="support">Reach Support</option>
                                <option value="trainer">Find a Personal Trainer</option>
                                <option value="dietician">Speak with a Licensed Dietician</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </>
            ) : (
                <div className="submission-message">
                    <h2>Thank You!</h2>
                    <p>Your message regarding <strong>{contactType}</strong> has been sent successfully.</p>
                    <p>We will respond within 24-48 hours.</p>
                </div>
            )}
        </section>
    );
}

export default ContactUs;
