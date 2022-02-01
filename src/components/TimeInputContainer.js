import StyledTimeInputContainer from "../styled/components/TimeInputContainer.styled";
import InputArrow from "./InputArrow";
import TimeInput from "./TimeInput";

const TimeInputContainer = ({ time, handleChange, handleClick, name }) => {
  return (
    <StyledTimeInputContainer>
      <TimeInput time={time} name={name} handleChange={handleChange} />
      <div className='arrows_container'> 
        <InputArrow  handleClick={(e)=> handleClick(e,name)} value='inc' />
        <InputArrow   handleClick={(e) => handleClick(e,name)} value='dec' />
      </div>
    </StyledTimeInputContainer>
  );
};

export default TimeInputContainer;
