import StyledTimerCircle from "../styled/components/TimerCircle.styled";
import TimerText from "./TimerText";

const TimerCircle = ({ strokeDash, circumfrence, strokeColor }) => {
  return (
    <StyledTimerCircle className='circle-container' strokeColor='pink'>
      <svg className='clock_container' viewBox='0 0 800 800'>
        <linearGradient id='g1' x1='1' y1='1' x2='0'>
          <stop stopColor='#2e325a' />
          <stop offset='1' stopColor='#0e112a' />
        </linearGradient>
        <circle className='gradient_circle' cx='400' cy='400' r='380' />
        <circle className='timer_circle' cx='400' cy='400' r='320' />
      </svg>
      <TimerText/>
    </StyledTimerCircle>
  );
};

export default TimerCircle;
