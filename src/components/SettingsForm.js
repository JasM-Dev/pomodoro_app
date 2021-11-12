import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import StyledSettingsForm from "../styled/components/SettingsForm.styled";
import CloseBttn from "./buttons/CloseBttn";
import TimeInputContainer from "./TimeInputContainer";
import SetColorBttn from "./buttons/SetColorBttn";
import SetFontBttn from "./buttons/SetFontBttn";
import ApplyBttn from "./buttons/ApplyBttn";


const SettingsForm = ({handleCloseClick}) => {
  const { colors, fonts, themeColor } = useContext(ThemeContext);

  return (
    <StyledSettingsForm>
      <div className='heading_section'>
        <h1>Settings</h1>
        <CloseBttn handleCloseClick={handleCloseClick} />
      </div>
      <hr  />
      <h2 className='section_heading'>time (minutes)</h2>
      <div className='time_section'>
        <div className='time_container'>
          <label className='time_label'>Pomodoro</label>
          <TimeInputContainer />
        </div>
        <div className='time_container'>
          <label className='time_label'>short break</label>
          <TimeInputContainer />
        </div>
        <div className='time_container'>
          <label className='time_label'>long break</label>
          <TimeInputContainer />
        </div>
      </div>
      <hr className="partial_hr"/>
      <h2 className='section_heading'>Font</h2>
      <div className='font_section setting_container'>
        {fonts.map(font => (
          <SetFontBttn key={font} font={font} />
        ))}
      </div>
      <hr className="partial_hr"/>
      <h2 className='section_heading color_heading'>Color</h2>
      <div className='color_section setting_container'>
        {colors.map(color => (
          <SetColorBttn key={color} color={color} />
        ))}
      </div>
      <ApplyBttn themeColor={themeColor} />
    </StyledSettingsForm>
  );
};

export default SettingsForm;
