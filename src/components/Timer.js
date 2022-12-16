import { useState, useEffect } from 'react';
import './timer.css';

const secondsToTime = (seconds) => {
  const calculatedTime = new Date( null );
  calculatedTime.setSeconds( seconds );

  return calculatedTime.toISOString().substring(14, 19);
}

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