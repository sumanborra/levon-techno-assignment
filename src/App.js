import {Route,Routes} from "react-router-dom"
import { useState } from "react";

import Home from "./components/Home"
import Overview from "./components/Overview";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import Notification from "./components/Notification";
import Messages from "./components/Messages";
import LevonContext from "./context/LevonContext";

import './App.css';

const App = () => {
  const[isDarkMode, setIsDarkMode] = useState(true)

  const changeIsDarkMode = () =>{
    setIsDarkMode(prevValue => !prevValue)
  }
  return (
  <LevonContext.Provider
  value={{
    isDarkMode,
    changeIsDarkMode: changeIsDarkMode,
    
  }}
  >
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path ="/overview" element={<Overview/>}/>
    <Route eaxt path="/analytics" element={<Analytics/>}/>
    <Route eaxact path="/settings" element={<Settings/>}/>
    <Route exact path="/notification" element={<Notification/>}/>
    <Route exact path="/messages" element={<Messages/>}/>
  </Routes>
  </LevonContext.Provider>
  )
}

export default App;
