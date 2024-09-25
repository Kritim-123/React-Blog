import Navigation from "./components/navigation";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageRenderer from "./page-renderer";

function App() {
  return (
    <Router> 
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" element={<PageRenderer />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
