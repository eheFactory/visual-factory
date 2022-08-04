import React, {useState} from "react";

// import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import AppContext from "./appcontext";

const App = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const contexStates = {
    originalImage,
    setOriginalImage,
    resultImage,
    setResultImage
  }

  return (
    <AppContext.Provider value={contexStates}>
      <AppRouter />
      {/* <Home /> */}
    </AppContext.Provider>
  )
}

export default App;