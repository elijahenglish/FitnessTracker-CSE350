import React from 'react';

function Testimonials() {
    const testimonials = [
        { quote: 'This app saved me so much time and money!', author: 'Joshua Crawford' },
        { quote: 'This website made it easy and accessible to track my progress.', author: 'James Mouser' },
        { quote: 'I was able to hit my goals by utilizing the calculators on this website!', author: 'Farzaad Zengana' },
        { quote: 'This app changed my life!', author: 'Alex Johnson' },
        { quote: 'Easy to use and highly effective.', author: 'Maria Gomez' },
        { quote: 'The best fitness tracker I have ever used.', author: 'Chris Lee' }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <h2>What Our Users Say</h2>
            <div className="testimonial-columns">
                <div className="testimonial-column">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <p>"{testimonial.quote}"</p>
                            <p className="author">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
                <div className="testimonial-column">
                    {testimonials.slice(3).map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <p>"{testimonial.quote}"</p>
                            <p className="author">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
