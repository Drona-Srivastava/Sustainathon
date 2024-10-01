import "../App.css";

export default function NavBar(){
    return (
        <header className="nav-bar">
            <div className="nav-logo"></div>
            <button className="nav-button home" href=".home">Home</button>
            <button className="nav-button about" >About</button>
            <button className="nav-button tracks" >Tracks</button>
            <button className="nav-button speakers" >Speakers</button>
            <button className="nav-button sponsors" >Sponsors</button>
            <button className="nav-button faqs" >FAQs</button>
            <button className="nav-button apply" >Apply</button>
        </header>
    );
};