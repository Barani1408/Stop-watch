import { useRef, useState, useEffect } from "react";
import "../components/StopWatch.css";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    // Cleanup interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  let seconds = 0;

  if (startTime != null && now != null) {
    seconds = (now - startTime) / 1000;
  }

  return (
    <div className="container">
      <p className="timer-text">Time Passed: {seconds.toFixed(2)} </p>
      <div className="button-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
