import './App.css';
import NavBar from './components/Header';
import HomeSym from './components/homesym';
import Countdown from './components/countdown';
import Sponsors from './components/sponsors';

function App() {
  const target = new Date(2024,12,11);
  return (
    <body>
      <NavBar></NavBar>
      <div className="body">
        <HomeSym></HomeSym>
        <Countdown targetDate={target}></Countdown>
      </div>
      <Sponsors></Sponsors>
    </body>
  );
}

export default App;
