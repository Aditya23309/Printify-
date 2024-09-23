// src/App.js
import React from 'react';
import Header from './header.jsx';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import ContactUs from './ContactUs.jsx';
import Product from './Product.jsx';
import Product2 from './Product2.jsx';
import Footer from './Footer.jsx';
import './App.css';

const App = () => {
    return (
        
        <div className="App">
            <Header />
            <Hero />
            <br />
            <Product />
            <br />
            <Product2 />
            <Features />
            <ContactUs />
            <Footer />
        </div>
            
    );
};

export default App;
