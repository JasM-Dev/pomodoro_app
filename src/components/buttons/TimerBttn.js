import StyledTimerBttn from "../../styled/components/buttons/TimerBttn.styled"

const TimerBttn = ({completed,paused,handleStart,handleRestart}) => {

    return (
        <StyledTimerBttn
        onClick={completed ? handleRestart : handleStart}>
            {!paused && !completed && "start"}
            {paused && !completed && "pause"}
            {completed && "restart"}
        </StyledTimerBttn>
    )
}

export default TimerBttn
