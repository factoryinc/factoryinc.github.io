import { useState } from 'react';
import './App.css';
import background from './background.png';
import splash from './splash.png';
import Timer from './components/Timer';
import Tank from './components/Tank';
import Funds from './components/Funds';

const GLOBAL_TIMER_S = 600;
const INITIAL_FUNDS = 500;
const TANK_INCOME = 1000;

const App = () => {
  const [funds, setFunds] = useState(INITIAL_FUNDS);
  const [isLoaded, setIsLoaded] = useState(false);

  const onTankTimerEnds = () => {
    setFunds(funds + TANK_INCOME);
  };
  
  return (
    <>
      {isLoaded ? (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
          <Timer initialSeconds={GLOBAL_TIMER_S} />
          <Tank onTankTimerEnds={onTankTimerEnds} />
          <Funds amount={funds} />
        </div>
      ) : (
        <div className="splash" style={{ backgroundImage: `url(${splash})` }}>
          <button className="play-btn" onClick={() => setIsLoaded(true)}>Play</button>
        </div>
      )}
    </>
  );
}

export default App;
