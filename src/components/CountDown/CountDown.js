import { useState, useRef, useEffect } from "react";

export default function CountDown({ timeAllowed }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timeUp, setTimeUp] = useState(false);

  const timeRef = useRef(timeAllowed);
  let interval = useRef();
  const countDownDate = timeRef.current;
  //   const countDownDate = timeAllowed;
  //   console.log(countDownDate - new Date().getTime());
  //   console.log("countDownDate is: " + countDownDate);
  //   console.log("currentDate is: " + new Date().getTime());

  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setTimeUp(true);
      } else {
        setTimeUp(false);
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      {timeUp ? (
        <span>Time Up!!</span>
      ) : (
        <div>
          <span>{timerDays}</span>:<span>{timerHours}</span>:
          <span>{timerMinutes}</span>:<span>{timerSeconds}</span>
        </div>
      )}
    </>
  );
}
