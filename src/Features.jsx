// src/components/Features.js
import React from 'react';
import './App.css';

const Features = () => {
    return (
        <section className="features">
            <h2>Why Choose Us?</h2>
            <div className="feature">
                <h3>Quality Products</h3>
                <p>High-quality materials for your designs.</p>
            </div>
            <div className="feature">
                <h3>Fast Shipping</h3>
                <p>Get your products delivered quickly.</p>
            </div>
            <div className="feature">
                <h3>24/7 Support</h3>
                <p>We're here to help you anytime.</p>
            </div>
        </section>
    );
};

export default Features;
