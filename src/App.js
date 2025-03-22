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
  const [mode, setMode] = useState('secondary'); // whether dark mode is enable or not
  const [modeText,setModeText] = useState('Enable Dark Mode'); // for set the text during mode
  const [alert,setAlert] = useState(null);
  const [btnColor,setBtnColor] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const handleMode= (cls)=>{
    removeBodyClasses();
    if(cls != null){
      document.body.classList.add('bg-'+cls);
      
      if(cls !== 'primary' && cls !== 'danger'){
        setBtnColor(null);
      }else{
        setBtnColor('warning');
      }
    }else{
      setBtnColor(null);
      if(mode === 'secondary'){
        setMode('dark');
        document.body.style.background= "#042743";
        setModeText('Disable Dark Mode');
        showAlert("Dark mode has been enable!","success");

        // document.title="TextUtils - Dark Mode";

        // Continuous Blink the title(not peferable)
        // setInterval(()=>{
        //   document.title="TextUtils is amazing mode";
        // },2000);
        // setInterval(()=>{
        //   document.title="Install TextUtils now";
        // },1500);

      }else{
        setMode('secondary');
        document.body.style.background="white";
        setModeText('Enable Dark Mode');
        showAlert("Light mode has been enable!","success");
        // document.title="TextUtils - Light Mode";
      }
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
        <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Text Converter LowerCase to UpperCase(Vise Versa)" mode={mode} btnColor={btnColor} />} />
      </Routes>

      </div>
      </Router>
      {/* About
        <About></About>
      </div> */}
           
    </>
  );
}

export default App;
