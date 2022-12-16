import { useEffect, useState } from 'react';
import secondsToTime from '../utils/secondsToTime';
import ProgressBar from './ProgressBar';
import './tank.css';

const BUILD_DURATION = 20;

const Tank = ({ onTankTimerEnds }) => {
  const [seconds, setSeconds] = useState(BUILD_DURATION);
  const [isBuilding, setIsBuilding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isBuilding && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        const progress = Math.round(100 - (100 * seconds / BUILD_DURATION));
        setProgress(progress);
      }, 1000);
    } else if (isBuilding && seconds <= 0) {
      setIsBuilding(false);
      setSeconds(BUILD_DURATION);
      onTankTimerEnds();
      setProgress(0);
    } else if (!isBuilding && seconds !== 0) {
      clearInterval(interval);
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isBuilding, seconds]);

  const handleClick = () => {
    if (!isBuilding) {
      setIsBuilding(true);
    }
  };

  return (
    <div className={`tank ${isBuilding ? 'tank-is-building' : '' }`} onClick={handleClick}>
      {isBuilding && (
        <>
          <ProgressBar progress={progress} />
          <div className="tank-timer">{secondsToTime(seconds)}</div>
        </>
      )}
    </div>
  );
};

export default Tank;
