import './App.css';
import './sponsors.css';
import './faq.css';
import NavBar from './components/Header';
import HomeSym from './components/homesym';
import Countdown from './components/countdown';
import Sponsors from './components/sponsors';
import FAQ from './components/faq'

function App() {
  const target = new Date(2024,12,11);
  return (
    <body>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="base"></div>
      <NavBar></NavBar>
      <div className="body">
        <HomeSym></HomeSym>
        <Countdown targetDate={target}></Countdown>
      </div>
      <Sponsors></Sponsors>
      <FAQ></FAQ>
    </body>
  );
}

export default App;
