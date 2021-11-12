import StatusBar from "./StatusBar"
import TimerCircle from "./TimerCircle"


const Timer = () => {
    return (
        <div>
        <header>
            <h1 className="site_title">Pomodoro</h1>
        </header>
           <StatusBar />
           <TimerCircle/> 
        </div>
    )
}

export default Timer
