import StyledCloseBttn from "../../styled/components/buttons/CloseBttn.styled";

const CloseBttn = ({handleCloseClick}) => {
  return (
    <StyledCloseBttn 
    type="button"
     onClick={handleCloseClick}>
      <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
        <path
          fillRule='evenodd'
          d='M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z'
        />
      </svg>
    </StyledCloseBttn>
  );
};

export default CloseBttn;
