import styled from "styled-components";

const StyledSettingsForm = styled.form`
  padding-top: 24px;
  padding-bottom: 35px;
  position: relative;
  @media (min-width: 760px) {
  }
  hr {
    border: 1px solid #e3e1e1;
  }
  .partial_hr {
    padding-right: 23px;
    padding-left: 24px;
    width: 85.5%;
    margin: 0 auto;
  }
  .heading_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 28px;
    color: var(--color_blue_black);
    padding-left: 24px;
    padding-right: 24px;
  }
  .heading_section h1 {
    font-size: 20px;
    @media (min-width: 760px) {
      font-size: 28px;
    }
  }
  .section_heading {
    padding-top: 24px;
    margin-bottom: 18px;
    font-weight: bold;
    font-size: 11px;
    line-height: 1;
    text-align: center;
    letter-spacing: 4.2px;
    color: var(--color_blue_black);
    text-transform: uppercase;
    @media (min-width: 760px) {
      text-align: left;
      font-size: var(--font_sm);
      margin-left: 40px;
      width: fit-content;
    }
  }
  .time_section {
    display: grid;
    row-gap: 8px;
    padding: 0 24px 24px 23px;
    @media (min-width: 760px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .time_container {
    display: grid;
    grid-template-columns: 60% 40%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 760px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
  .time_label {
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
    color: var(--color_blue_black);
    opacity: 0.4;
  }
  .setting_container {
    width: 41%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;
    @media (min-width: 760px) {
      margin-right: 0;
    }
  }
  @media (min-width: 760px) {
    .section_container {
      display: flex;
      justify-content: space-between;
      padding-right: 35px;
      margin-top: 24px;
    }
  }
`;

export default StyledSettingsForm;
