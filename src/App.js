import './App.css';
import About from './Components/About';
import Aleart from './Components/Aleart';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('info'); // whether dark mode is enable or not
  const [modeText,setModeText] = useState('Enable Dark Mode'); // for set the text during mode
  const [alert,setAlert] = useState(null);

  // Use for alert message
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // Enable and Disable dark mode
  const handleMode= ()=>{
    if(mode === 'info'){
      setMode('dark');
      document.body.style.background= "#042743";
      setModeText('Disable Dark Mode');
      showAlert("Dark mode has been enable!","success");

    }else{
      setMode('info');
      document.body.style.background="white";
      setModeText('Enable Dark Mode');
      showAlert("Light mode has been enable!","success");
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggle={handleMode} text={modeText}/>

        {/* Aleart */}
        <Aleart alert={alert}/>

        {/* Text form */}
        <div className="container my-3">
          <Routes>
            {/* exact only use when it is perfectly match with path */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Text Converter LowerCase to UpperCase(Vise Versa)" mode={mode} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
