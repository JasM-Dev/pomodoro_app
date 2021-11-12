import styled from "styled-components";

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

  .status_span {
    color: var(--color_blue_gray);
    font-size: var(--font_xs);
    padding: 24px 21px 15px 22px;
    border-radius: 26.5px;
    text-align: center;
    opacity: .4;
  }
`;
