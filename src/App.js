import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<Home />} />
          <Route path="/jokes/:id" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
