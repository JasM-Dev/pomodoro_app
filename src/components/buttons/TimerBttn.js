import StyledTimerBttn from "../../styled/components/buttons/TimerBttn.styled";

const TimerBttn = ({
  color,
  completed,
  paused,
  handleStart,
  handleRestart,
}) => {
  return (
    <StyledTimerBttn
      color={color}
      onClick={completed ? handleRestart : handleStart}
    >
      {!paused && !completed && "start"}
      {paused && !completed && "pause"}
      {completed && "restart"}
    </StyledTimerBttn>
  );
};

export default TimerBttn;
