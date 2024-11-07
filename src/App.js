
import './App.css';
import About from './About.js'
import Speakers from './Speakers.js';
import NavBar from './components/Header';
import HomeSym from './components/homesym';
import Countdown from './components/countdown';

import Tracks from './tracks.js';

function App() {
  const target = new Date(2024,12,11);
  return (
    <body className="body">\
      <Tracks></Tracks>
      <NavBar></NavBar>
      <HomeSym></HomeSym>
      <Countdown targetDate={target}></Countdown>
    </body>
  );
}

export default App;
