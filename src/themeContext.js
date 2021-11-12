import * as React from "react";
import { useState } from "react";
import { GlobalStyle } from "./styled/GlobalStyle";

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const colors = ["#F87070", "#70F3F8", "#D881F8"];
  const fonts = [
    "'Kumbh Sans', sans-serif",
    "'Roboto Slab', serif",
    "'Space Mono', monospace",
  ];
  const [themeColor, setThemeColor] = useState(colors[0]);
  const [themeFont, setThemeFont] = useState(fonts[0]);

  const value = 
    {
      themeColor: themeColor,
      setThemeColor: setThemeColor,
      themeFont: themeFont,
      setThemeFont: setThemeFont,
      colors: colors,
      fonts: fonts,
    }
  
  return (
    <ThemeContext.Provider  value={value}> 
    <GlobalStyle themeFont={themeFont}/>
    {children

    }</ThemeContext.Provider>
  );
}

export default ThemeProvider;
