import './progress-bar.css';

export const TANK_TIME_TO_BUILD_S = 45;

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar"><div className="progress" style={{ width: `${progress}%` }}></div></div>
  );
};

export default ProgressBar;
