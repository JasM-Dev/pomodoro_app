import styled from 'styled-components'
const StyledApplyBttn = styled.button` 
    position: absolute;
    left: 31%;
    top: 96%;
    background-color: ${props => props.themeColor};
    border-radius: 26.5px;
    padding: 17px 47px 20px 47px;
    font-weight: bold;
    color: var(--color_white);
`
export default StyledApplyBttn;