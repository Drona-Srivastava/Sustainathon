import './App.css';
import About from './About.js'
import Speakers from './Speakers.js';
import NavBar from './components/Header';
import HomeSym from './components/homesym';
import Countdown from './components/countdown';
import Sponsors from './components/sponsors';
import FAQ from './components/faq'
import Tracks from './tracks.js';


function App() {
  const target = new Date(2024,12,11);
  return (
    <body>
      <NavBar></NavBar>
      <div className="base">
        <HomeSym></HomeSym>
        <Countdown targetDate={target}></Countdown>
      </div>
      <About></About>
      <Tracks></Tracks>
      <Speakers></Speakers>
      <Sponsors></Sponsors>
      <FAQ></FAQ>
      
    </body>
  );
}

export default App;
