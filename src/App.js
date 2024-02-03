import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Router>
        <Navbar enabled={enabled} setEnabled={setEnabled} />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home enabled={enabled} setEnabled={setEnabled} />}
            ></Route>
            <Route
              path="/about"
              element={<About enabled={enabled} setEnabled={setEnabled} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
