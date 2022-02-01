import styled from 'styled-components'
const StyledSetColorBttn = styled.button` 
border-radius:100%;
width: 40px;
height: 40px;
background: ${props => props.color};
svg{
    width: 40%;
    height: auto;
    fill: #000;
}
`
export default StyledSetColorBttn