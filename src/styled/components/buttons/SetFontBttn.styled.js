import styled from 'styled-components';
import StyledSetColorBttn from './SetColorBttn.styled';
const StyledSetFontBttn = styled(StyledSetColorBttn)` 
background: ${props =>props.themeFont === props.font? 'var(--color_blue_black)': 'var(--color_light_gray)'};
font-family: ${props => props.font};
color: ${props =>props.themeFont === props.font? 'var(--color_white)': 'hsla(235, 35%, 18%, .73)'};




`

export default StyledSetFontBttn