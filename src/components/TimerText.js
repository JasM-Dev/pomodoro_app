import StyledTimerText from "../styled/components/TimerText.styled"
import TimerBttn from "./buttons/TimerBttn"

const TimerText = () => {
    return (
<StyledTimerText>
   <span className="time"> 00:00 </span>
   <TimerBttn/>
</StyledTimerText>
    )
}

export default TimerText
