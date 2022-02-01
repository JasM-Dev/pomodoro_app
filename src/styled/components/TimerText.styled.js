import styled from 'styled-components'

const StyledTimerText = styled.div` 
grid-row: 1/2;
grid-column: 1/2;
align-self: center;
justify-self: center;
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr;
margin-top: 40px;

.time{
font-weight: bold;
font-size: 80px;
line-height: 80px;
text-align: center;
letter-spacing: -4px;
color: #D7E0FF;
@media(min-width: 760px){
    font-size: 100px;
}
}
`
export default StyledTimerText;