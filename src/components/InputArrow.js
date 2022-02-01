import StyledInputArrows from "../styled/components/buttons/InputArrow.styled"

const InputArrow = ({handleClick,value,name}) => {
    return (
<StyledInputArrows
type="button"
value={value}
name={name}
onClick={handleClick}>

{value === "inc" && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path d="M1 6l6-4 6 4"/></svg> }
{value === "dec" && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path  d="M1 1l6 4 6-4"/></svg>}

</StyledInputArrows>
    )
}

export default InputArrow
