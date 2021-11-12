import styled from "styled-components";

export const StyledStatusLabel = styled.span`
    font-size: var(--font_xs);
    padding: 24px 21px 15px 22px;
    border-radius: 26.5px;
    text-align: center;
    color: ${props => props.active === props.status ? 'var(--color_blue_black)': 'var(--color_blue_gray)'};
    background-color: ${props => props.active === props.status ? props.themeColor : 'transparent'}
`

export const StyledStatusBar = styled.div`
  background-color: var(--color_blue_black);
  border-radius: 31.5px;
  padding: 8px 7px;
  box-sizing: border-box;
  width: 87.7%;
  margin: 45px auto 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;
