import styled from "styled-components";

export const StyledStatusLabel = styled.span`
  cursor: default;
  font-size: var(--font_xs);
  padding: 24px 16px 22px 18px;
  border-radius: 26.5px;
  text-align: center;
  color: ${props =>
    props.active === props.status
      ? "var(--color_blue_black)"
      : "var(--color_blue_gray)"};
  background-color: ${props =>
    props.active === props.status ? props.themeColor : "transparent"};
  &:hover {
    filter: brightness(130%);
  }
  @media (min-width: 760px) {
    padding: 20px 28px 15px 25px;
    font-size: var(--font_sm);
  }
  @media (min-width: 1400px) {
    font-size: var(--font_xs);
    padding: 14px 23px 17px 25px;
  }
`;
export const StyledStatusBar = styled.div`
  background-color: var(--color_blue_black);
  border-radius: 31.5px;
  padding: 8px 7px;
  box-sizing: border-box;
  width: 329px;
  margin: 45px auto 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  @media (min-width: 700px) {
    width: 373px;
    margin-top: 55px;
  }
`;
