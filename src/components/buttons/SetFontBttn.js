import StyledSetFontBttn from "../../styled/components/buttons/SetFontBttn.styled"

const SetFontBttn = ({font,themeFont,handleClick}) => {
    return (
<StyledSetFontBttn
type="button" 
onClick={handleClick}
font={font}
themeFont={themeFont}
value={font}
>
    Aa
</StyledSetFontBttn>
    )
}

export default SetFontBttn
