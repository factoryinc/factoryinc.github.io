const secondsToTime = (seconds) => {
  const calculatedTime = new Date(null);
  calculatedTime.setSeconds(seconds);

  return calculatedTime.toISOString().substring(14, 19);
}

export default secondsToTime;
