import React, { useState } from "react";
import "./App.css";
import AboutPage from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About TextUtils" mode={mode} toggleMode={toggleMode} />{/* Here, Navbar is a Componenet and title is a prop passed from  */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        <AboutPage />
      </div>
    </>
  );
}

export default App;
