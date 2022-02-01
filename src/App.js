
import ThemeProvider from "./themeContext";
import Timer from "./components/Timer";

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Timer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
