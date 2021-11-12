import StyledSetColorBttn from "../../styled/components/buttons/SetColorBttn.styled"

const SetColorBttn = ({children,color}) => {
    return (
<StyledSetColorBttn color={color}>
    {children}
</StyledSetColorBttn>
    )
}

export default SetColorBttn
