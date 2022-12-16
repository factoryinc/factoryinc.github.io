import { useState, useEffect } from 'react';
import secondsToTime from '../utils/secondsToTime';
import './timer.css';

const Timer = ({initialSeconds}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      {secondsToTime(seconds)}
    </div>
  );
};

export default Timer;