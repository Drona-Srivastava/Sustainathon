import "../App.css";

export default function NavBar(){
    const scrollToSection = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header  className="nav-bar">
            <div className="nav-logo"></div>
            <button className="nav-button home" onClick={() => scrollToSection('.home')}>Home</button>
            <button className="nav-button about" onClick={() => scrollToSection('.about')}>About</button>
            <button className="nav-button tracks" onClick={() => scrollToSection('.tracks')}>Tracks</button>
            <button className="nav-button speakers" onClick={() => scrollToSection('.speakers')}>Speakers</button>
            <button className="nav-button sponsors" onClick={() => scrollToSection('.sponsors')}>Sponsors</button>
            <button className="nav-button faqs" onClick={() => scrollToSection('.faqs')}>FAQs</button>
            <button className="nav-button apply" onClick={() => scrollToSection('.apply')}>Apply</button>
        </header>
    );
};