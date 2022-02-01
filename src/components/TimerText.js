import StyledTimerText from "../styled/components/TimerText.styled";
import TimerBttn from "./buttons/TimerBttn";

const TimerText = ({
  color,
  handleStart,
  handleRestart,
  paused,
  minutes,
  seconds,
  completed,
}) => {
  return (
    <StyledTimerText>
      <span className='time'>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
      <TimerBttn
        color={color}
        completed={completed}
        paused={paused}
        handleStart={handleStart}
        handleRestart={handleRestart}
      />
    </StyledTimerText>
  );
};

export default TimerText;
