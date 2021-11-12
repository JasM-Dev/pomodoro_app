import styled from "styled-components";
const StyledSettingsForm = styled.form`
  padding-top: 24px;
  padding-bottom: 35px;
  position: relative;
  hr {
    border: 1px solid #e3e1e1;
  }
  .partial_hr{
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
  .section_heading {
    padding-top: 24px;
    margin-bottom: 18px;
    font-weight: bold;
    font-size: 11px;
    line-height: 1;
    text-align: center;
    letter-spacing: 4.23077px;
    color: var(--color_blue_black);
    text-transform: uppercase;
  }
  .time_container {
    display: grid;
    grid-template-columns: 60% 40%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .time_section {
    display: grid;
    row-gap: 8px;
    padding: 0 24px 24px 23px;
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
  }
  .apply_bttn {
    position: absolute;
    left: 31%;
    top: 96%;
    background: salmon;
    border-radius: 26.5px;
    padding: 17px 47px 20px 47px;
    font-weight: bold;
    color: var(--color_white)
  }
`;

export default StyledSettingsForm;
