import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const currentDate = new Date().getTime();
  const targetDate = new Date("Nov 4, 2023 00:00:00").getTime();
  const targetDateString = "4th Nov";
  const [timeLeft, setTimeLeft] = useState(targetDate - currentDate);
  const [isViewButtonClicked, setIsViewButtonClicked] = useState(false);
  const addZero = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
  };
  const days = addZero(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = addZero(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = addZero(
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = addZero(Math.floor((timeLeft % (1000 * 60)) / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - currentDate);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <h1> Countdown Timer for my Birthday! : )</h1>
      <div className="timer">
        {days} : {hours} : {minutes} : {seconds}{" "}
      </div>
      <h2>Click here to reveal my birthday if you're too lazy to calculate</h2>
      <button onClick={() => setIsViewButtonClicked(prev => !prev)}>{isViewButtonClicked ? "Hide" : "View"}</button>
      <p className={`birth-date ${isViewButtonClicked ? "enable-text" : "disable-text"}`} >{targetDateString}</p>
    </>
  );
}

export default App;
