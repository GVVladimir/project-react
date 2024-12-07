import { createContext, Dispatch, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Card from "./components/card/card";
import Footer from "./components/footer/footer";

type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;

  btnText: string;
  setBtnText: Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextType | null>(null);


function App() {
  const [theme, setTheme] = useState("light");
  const [btnText, setBtnText] = useState("хочеш темную");

  return (
    <div className={`container ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme, btnText, setBtnText }}>       
        <Header />      
        <Card />
        <Card />
        <Card />      
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
