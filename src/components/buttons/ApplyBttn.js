import StyledApplyBttn from "../../styled/components/buttons/ApplyBttn.styled";

const ApplyBttn = ({ color }) => {
  return (
    <StyledApplyBttn type={"submit"} color={color}>
      Apply
    </StyledApplyBttn>
  );
};

export default ApplyBttn;
