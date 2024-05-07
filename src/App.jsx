import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { CaseStudyPage } from "./components/case-study/CaseStudyPage";
import "./App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home width={width} />} />
          <Route path='/process/:processId' element={<CaseStudyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
