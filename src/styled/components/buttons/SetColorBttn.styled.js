import styled from 'styled-components'
const StyledSetColorBttn = styled.button` 
border-radius:100%;
width: 40px;
height: 40px;
background: ${props => props.color};
`
export default StyledSetColorBttn