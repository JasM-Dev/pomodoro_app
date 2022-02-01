import styled from 'styled-components'

const StyledTimerBttn = styled.button` 
display: block;
justify-self: center;
margin-left: 10px;
width: fit-content;
background: transparent;
margin-top: 12px;
font-weight: bold;
font-size: var(--font_md);
line-height: 1;
letter-spacing: 13.125px;
color: #D7E0FF;
text-transform: uppercase;
&:hover{
    color: ${props => props.color}
}
@media(min-width: 760px){
    font-size: var(--font_lg)
}
`
export default StyledTimerBttn