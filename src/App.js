import './App.css';
import background from './background.png';
import Timer from './components/Timer';
import Tank from './components/Tank';
import Money from './components/Money';

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Timer initialSeconds={600} />
      <Tank />
      <Money />
    </div>
  );
}

export default App;
