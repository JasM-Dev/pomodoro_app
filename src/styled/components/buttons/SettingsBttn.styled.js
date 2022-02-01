import styled from "styled-components";

const StyledSettingsBttn = styled.button`
  display: block;
  background: transparent;
  margin: 79px auto 0 auto;
  svg {
    fill: var(--color_blue_gray);
    opacity: .5;
    &:hover{
        opacity: 1;
    }
  }
  @media (min-width: 760px) {
    margin-top: 144px;
  }
  @media (min-width: 1400px) {
    margin-top: 63px;
  }
`;

export default StyledSettingsBttn;
