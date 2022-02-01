import styled from 'styled-components'
const StyledApplyBttn = styled.button` 
    position: absolute;
    left: 35%;
    top: 96%;
    background-color: ${props => props.color};
    border-radius: 26.5px;
    padding: 17px 47px 20px 47px;
    font-weight: bold;
    color: var(--color_white);
    &:hover{
 filter: brightness(130%);
    }
    @media(min-width: 768px){
        left: 33%;
    }
`
export default StyledApplyBttn;