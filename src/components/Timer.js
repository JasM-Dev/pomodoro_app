import { useContext, useState, useEffect, useCallback } from "react";
import StatusBar from "./StatusBar";
import TimerCircle from "./TimerCircle";
import { getStroke } from "../helpers/getStroke";
import { ThemeContext } from "../themeContext";

const Timer = () => {
  const { times } = useContext(ThemeContext);
  const intervals = ["pom", "short", "long"];
  const circumfrence = 2011;
  const [completed, setCompleted] = useState(false);
  const [activeInt, setActiveInt] = useState("pom");
  const [timerOn, setTimerOn] = useState(false);
  const [pomCycles, setPomCycles] = useState(0);
  const [cycleTime, setCycleTime] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [strokeDash, setStrokeDash] = useState(circumfrence);
  const [dashAmount, setDashAmnt] = useState(getStroke(times[0], circumfrence));
  useEffect(() => {
    setCycleTime(prev => ({
      ...prev,
      minutes: times.pom,
      seconds: 0,
    }));
  }, [times]);

  useEffect(() => {
    setDashAmnt(getStroke(times.pom, circumfrence));
  }, [times]);

  const switchCycles = useCallback(() => {
    if (activeInt === "pom" && pomCycles < 3) {
      setActiveInt("short");
      setPomCycles(prev => prev + 1);
      setStrokeDash(circumfrence);
      setDashAmnt(getStroke(times.pom, circumfrence));
      setCycleTime(prev => ({
        ...prev,
        minutes: times.short_break,
        seconds: 0,
      }));
      return;
    } else if (activeInt === "short") {
      setActiveInt("pom");
      setStrokeDash(circumfrence);
      setDashAmnt(getStroke(times.short_break, circumfrence));
      setCycleTime(prev => ({
        ...prev,
        minutes: times.pom,
        seconds: 0,
      }));
      return;
    } else if (activeInt === "pom" && pomCycles >= 3) {
      setStrokeDash(circumfrence);
      setDashAmnt(getStroke(times.long_break, circumfrence));
      setActiveInt("long");
      setCycleTime(prev => ({
        ...prev,
        minutes: times.long_break,
        seconds: 0,
      }));
    } else if (activeInt === "long") {
      setCompleted(true);
      setTimerOn(false);
      setPomCycles(0);
      setDashAmnt(getStroke(times.pom, circumfrence))
      return;
    }
  }, [activeInt, times, pomCycles, setPomCycles]);

  const secondsCountDown = useCallback(() => {
    const { minutes, seconds } = cycleTime;
    if (minutes === 0 && seconds === 0) {
      switchCycles();
      return;
    } else if (minutes >= 1 && seconds === 0) {
      setCycleTime(prev => ({ ...prev, minutes: minutes - 1, seconds: 59 }));
      setStrokeDash(prev => prev - dashAmount);
      return;
    } else if (minutes <= 1 && seconds === 0) {
      setCycleTime(prev => ({ ...prev, seconds: 59 }));
      setStrokeDash(prev => prev - dashAmount);
      return;
    } else {
      setCycleTime(prev => ({ ...prev, seconds: seconds - 1 }));
      setStrokeDash(prev => prev - dashAmount);
    }
  }, [cycleTime, switchCycles, dashAmount]);

  useEffect(() => {
    let countDownTimer;
    if (timerOn) {
      countDownTimer = setTimeout(secondsCountDown, 1000);
    }
    return () => {
      clearInterval(countDownTimer);
    };
  }, [timerOn, secondsCountDown]);
  function handleStart() {
    setTimerOn(!timerOn);
  }
  function restartTimer() {
    setStrokeDash(circumfrence)
    setCycleTime(prev => ({
      ...prev,
      minutes: times.pom,
      seconds: 0,
    }));
    setActiveInt("pom")
    setCompleted(false);
    setTimerOn(!timerOn);
    
  }

  return (
    <div>
      <header>
        <h1 className='site_title'>Pomodoro</h1>
      </header>
      <StatusBar intervals={intervals} active={activeInt} />
      <TimerCircle
        handleStart={handleStart}
        handleRestart={restartTimer}
        paused={timerOn}
        minutes={cycleTime.minutes}
        seconds={cycleTime.seconds}
        completed={completed}
        circumfrence={circumfrence}
        strokeDash={strokeDash}
      />
    </div>
  );
};

export default Timer;
