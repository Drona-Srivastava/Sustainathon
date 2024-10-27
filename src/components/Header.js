import { useState } from "react";
import "../App.css";

export default function NavBar() {
    const [activeButton, setActiveButton] = useState(null); 

    const scrollToSection = (selector, sel1) => {
        setActiveButton(sel1); 
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="nav-bar">
            <img src="/images/logo.png" alt="logo" className="nav-logo" />
            <button 
                className={`nav-button ho ${activeButton === '.ho' ? 'active' : ''}`} 
                onClick={() => scrollToSection('.home', '.ho')}
            >
                Home
            </button>
            <button 
                className={`nav-button ab ${activeButton === '.ab' ? 'active' : ''}`} 
                onClick={() => scrollToSection('.about', '.ab')}
            >
                About
            </button>
            <button 
                className={`nav-button tr ${activeButton === '.tr' ? 'active' : ''}`} 
                onClick={() => scrollToSection('.tracks', '.tr')}
            >
                Tracks
            </button>
            <button 
                className={`nav-button sp ${activeButton === '.sp' ? 'active' : ''}`} 
                onClick={() => scrollToSection('.speakers', '.sp')}
            >
                Speakers
            </button>
            <button 
                className={`nav-button spo ${activeButton === '.spo' ? 'active' : ''}`} 
                onClick={() => scrollToSection('.sponsors', '.spo')}
            >
                Sponsors
            </button>
            <button 
                className={`nav-button faq ${activeButton === '.faq' ? 'active' : ''}`} 
                onClick={() => scrollToSection('.faqs', '.faq')}
            >
                FAQs
            </button>
            <button 
                className={`nav-button app ${activeButton === '.app' ? 'active' : ''}`} 
                onClick={() => scrollToSection('.apply', '.app')}
            >
                Apply
            </button>
        </header>
    );
};
