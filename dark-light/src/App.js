import { useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import ThemeContext from "./Context/Themecontext";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
