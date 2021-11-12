import styled from 'styled-components';
import StyledSetColorBttn from './SetColorBttn.styled';
const StyledSetFontBttn = styled(StyledSetColorBttn)` 
background: var(--color_light_gray);
font-family: ${props => props.font};


`

export default StyledSetFontBttn