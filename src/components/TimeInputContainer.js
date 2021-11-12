import StyledInputArrows from "../styled/components/buttons/InputArrow.styled"
import StyledTimeInput from "../styled/components/TimeInput.styled"
import StyledTimeInputContainer from "../styled/components/TimeInputContainer.styled"

const TimeInputContainer = () => {
    return (
        <StyledTimeInputContainer>
            <StyledTimeInput htmlFor="pomodoro time" type="number"/>
            <div className="arrows_container">
            <StyledInputArrows>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path d="M1 6l6-4 6 4"/></svg>
            </StyledInputArrows>
            <StyledInputArrows>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path d="M1 1l6 4 6-4"/></svg>
            </StyledInputArrows>
            </div>
        </StyledTimeInputContainer>
    )
}

export default TimeInputContainer
