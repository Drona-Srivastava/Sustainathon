import { useState } from "react";
import "../App.css";

export default function NavBar() {
    const [activeButton, setActiveButton] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown visibility

    const scrollToSection = (selector, sel1) => {
        setActiveButton(sel1);
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsDropdownOpen(false); // Close dropdown after scrolling to section
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    return (
        <header className="nav-bar">
            <img src="/images/logo.png" alt="logo" className="main-logo" />
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
                onClick={() => scrollToSection('.sponsor', '.spo')}
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
            
            {/* Hamburger button to toggle dropdown */}
            <button className="ham closed" onClick={toggleDropdown}>
                <img src={isDropdownOpen?"images/Ham-State=Pressed.png":"images/Ham-State=Default.png"} alt="hamimage" style={{ height: "40px", width: "50px" }} />
            </button>
            
            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <button onClick={() => scrollToSection('.home', '.ho')}>Home</button>
                    <button onClick={() => scrollToSection('.about', '.ab')}>About</button>
                    <button onClick={() => scrollToSection('.tracks', '.tr')}>Tracks</button>
                    <button onClick={() => scrollToSection('.speakers', '.sp')}>Speakers</button>
                    <button onClick={() => scrollToSection('.sponsor', '.spo')}>Sponsors</button>
                    <button onClick={() => scrollToSection('.faqs', '.faq')}>FAQs</button>
                </div>
            )}
        </header>
    );
}
