import React, { createContext, useState } from "react";
// import CompB from "./CompB";
import CompC from "./CompC";

// Tạo ngữ cảnh
export const themeContext = createContext();

function DemoUseContext() {
  // DemoUseContext => CompB => CompC
  const [theme, setTheme] = useState("light");

  const handleToggleChange = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div>
      {/* <button onClick={handleToggleChange}>Click me !!!</button>
      <CompB themeProps={theme} /> */}

      <themeContext.Provider value={theme}>
        <button onClick={handleToggleChange}>Click me !!!</button>
        <CompC />
      </themeContext.Provider>
    </div>
  );
}

export default DemoUseContext;
