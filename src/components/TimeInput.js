import StyledTimeInput from "../styled/components/TimeInput.styled";
const TimeInput = ({ time, name, handleChange }) => {
  return (
    <StyledTimeInput
      type='number'
      value={time}
      onChange={handleChange}
      name={name}
    ></StyledTimeInput>
  );
};

export default TimeInput;
