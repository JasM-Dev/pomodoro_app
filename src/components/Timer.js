import { useState } from "react";
import StatusBar from "./StatusBar";
import TimerCircle from "./TimerCircle";

const Timer = () => {
  const intervals = ["pom", "short", "long"];
  const [activeInt, setActiveInt] = useState(intervals[0]);
  return (
    <div>
      <header>
        <h1 className='site_title'>Pomodoro</h1>
      </header>
      <StatusBar intervals={intervals} active={activeInt} />
      <TimerCircle />
    </div>
  );
};

export default Timer;
