import { useState} from "react";
import ThemeProvider from "./themeContext";
import SettingsBttn from "./components/buttons/SettingsBttn";
import SettingsModal from "./components/SettingsModal";
import Timer from "./components/Timer";

function App() {
  const [editingSettings, setEditingSettings] = useState(false);

  return (
    <ThemeProvider>
      <div className='App'>
        {editingSettings && (
          <SettingsModal handleCloseClick={() => setEditingSettings(false)} />
        )}
        <Timer />
        <SettingsBttn handleClick={() => setEditingSettings(true)} />
      </div>
    </ThemeProvider>
  );
}

export default App;
