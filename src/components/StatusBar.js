import { StyledStatusBar } from "../styled/components/StatusBar.styled";

 const StatusBar = () => {
    const timerStatuses = ["pom", "short", "long"];
    return (
        <StyledStatusBar>
        {timerStatuses.map(status => (
          <span key={status} className='status_span'>
            {status === "pom" ? 'pomodoro' : `${status} break`}
          </span>
        ))}
      </StyledStatusBar>
    )
}
export default StatusBar;