import React, { useState } from "react";

// import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import AppContext from "./appcontext";
const App = () => {
  const [vlOriginalImage, setVlOriginalImage] = useState(null);
  const [vlResultImage, setVlResultImage] = useState(null);
  const [vlEffects, setVlEffects] = useState([]);

  const contexStates = {
    vlOriginalImage,
    setVlOriginalImage,
    vlResultImage,
    setVlResultImage,
    vlEffects,
    setVlEffects
  }

  return (
    <AppContext.Provider value={contexStates}>
      <AppRouter />
      {/* <Home /> */}
    </AppContext.Provider>
  )
}

export default App;