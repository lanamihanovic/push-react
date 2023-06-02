import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Naslovna from "./Naslovna";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />}>
            {" Naslovna "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
