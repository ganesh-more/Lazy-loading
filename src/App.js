import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
const PDF_Renderer = React.lazy(() => import("./pdf-renderer"));

function App() {
  let [showPDF, setShowPDF] = useState(false);
  const showPDFOnClick = () => {
    setShowPDF(true);
  };
  return (
    <div className="App">
      <button style={{display: "block"}} onClick={showPDFOnClick}>Show PDF</button>
      <React.Suspense fallback = {<div>Loadding....</div>}>
      {showPDF && <PDF_Renderer/>}
      </React.Suspense>
    </div>
  );
}

export default App;
