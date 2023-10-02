import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter, Route, Routes}  from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
           <Route path="/about" element=
             {<About />} mode={mode} />
           <Route path="/" element=
             {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />} mode={mode}/>
    </Routes>
    </div>
    </BrowserRouter>
    </> 
  );
}

export default App;