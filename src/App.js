import "./App.css";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import TutorialPage from "./components/v1/TutorialPage";
import BasicCalculator from "./components/v1/BasicCalculator";
import ScientificCalculator from "./components/v1/ScientificCalculator";

// import TutorialPage from "./components/v2/TutorialPage";
// import BasicCalculator from "./components/v2/BasicCalculator";
// import ScientificCalculator from "./components/v2/ScientificCalculator";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/tutorial" className="nav-link">
        <button className="nav-btn">Tutorial</button>
        </NavLink>
        <NavLink to="/basic" className="nav-link">
        <button className="nav-btn">Basic Calculator</button>
        </NavLink>
        <NavLink to="/scientific" className="nav-link">
        <button className="nav-btn">Scientific</button>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/basic" element={<BasicCalculator />} />
        <Route path="/scientific" element={<ScientificCalculator />} />
        <Route path="*" element={<Navigate to="/tutorial" replace />} />
      </Routes>
    </div>
  );
}

export default App;