
import './App.css';
import NavBar from './components/Header';
import HomeSym from './components/homesym';
import Countdown from './components/countdown';

function App() {
  const target = new Date(2024,12,11);
  return (
    <body className="body">
      <NavBar></NavBar>
      <HomeSym></HomeSym>
      <Countdown targetDate={target}></Countdown>
    </body>
  );
}

export default App;
