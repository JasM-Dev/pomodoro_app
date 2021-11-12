import { useContext } from "react";
import { StyledStatusBar,StyledStatusLabel } from "../styled/components/StatusBar.styled";
import { ThemeContext } from "../themeContext";
const StatusBar = ({ intervals, active }) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <StyledStatusBar >
      {intervals.map(status => (
        <StyledStatusLabel key={status}
        active={status}
         status={active} 
         themeColor={themeColor}>
        {status === "pom" ? "pomodoro" : `${status} break`}
        </StyledStatusLabel>
      ))}
    </StyledStatusBar>
  );
};
export default StatusBar;
