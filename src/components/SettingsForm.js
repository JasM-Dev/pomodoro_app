import { useContext, useState } from "react";
import { ThemeContext } from "../themeContext";
import StyledSettingsForm from "../styled/components/SettingsForm.styled";
import CloseBttn from "./buttons/CloseBttn";
import TimeInputContainer from "./TimeInputContainer";
import SetColorBttn from "./buttons/SetColorBttn";
import SetFontBttn from "./buttons/SetFontBttn";
import ApplyBttn from "./buttons/ApplyBttn";

const SettingsForm = ({ handleCloseClick, restart }) => {
  const {
    colors,
    fonts,
    themeColor,
    times,
    themeFont,
    setThemeFont,
    setThemeColor,
    setTimes,
  } = useContext(ThemeContext);

  const [intTimes, setIntervalTimes] = useState({
    pom: times.pom,
    short: times.short,
    long: times.long,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setIntervalTimes(prev => ({ ...prev, [name]: value }));
    console.log(value);
  };

  const incDec = (e, name) => {
    const { value } = e.target;
    if (value === "inc") {
      setIntervalTimes(prev => ({ ...prev, [name]: prev[name] + 1 }));
      return;
    } else if (intTimes[name] === 0) return;
    setIntervalTimes(prev => ({ ...prev, [name]: prev[name] - 1 }));
  };

  const applyChanges = e => {
    e.preventDefault();
    setTimes(intTimes);
    handleCloseClick();
    restart();
  };

  return (
    <StyledSettingsForm onSubmit={e => applyChanges(e)}>
      <div className='heading_section'>
        <h1>Settings</h1>
        <CloseBttn handleCloseClick={handleCloseClick} />
      </div>
      <hr />
      <h2 className='section_heading'>time (minutes)</h2>
      <div className='time_section'>
        <div className='time_container'>
          <label className='time_label'>pomodoro</label>
          <TimeInputContainer
            name='pom'
            time={intTimes.pom}
            handleChange={e => handleInputChange(e)}
            handleClick={incDec}
          />
        </div>
        <div className='time_container'>
          <label className='time_label'>short break</label>
          <TimeInputContainer
            name='short'
            time={intTimes.short}
            handleChange={e => handleInputChange(e)}
            handleClick={incDec}
          />
        </div>
        <div className='time_container'>
          <label className='time_label'>long break</label>
          <TimeInputContainer
            name='long'
            time={intTimes.long}
            handleChange={e => handleInputChange(e)}
            handleClick={incDec}
          />
        </div>
      </div>
      <hr className='partial_hr' />
      <div className='section_container'>
        <h2 className='section_heading'>Font</h2>
        <div className='font_section setting_container'>
          {fonts.map(font => (
            <SetFontBttn
              handleClick={() => setThemeFont(font)}
              key={font}
              font={font}
              themeFont={themeFont}
            />
          ))}
        </div>
      </div>

      <hr className='partial_hr' />
      <div className='section_container'>
        <h2 className='section_heading color_heading'>Color</h2>
        <div className='color_section setting_container'>
          {colors.map(color => (
            <SetColorBttn
              key={color}
              handleClick={() => setThemeColor(color)}
              theme={themeColor}
              color={color}
            />
          ))}
        </div>
      </div>
      <ApplyBttn color={themeColor} />
    </StyledSettingsForm>
  );
};

export default SettingsForm;
