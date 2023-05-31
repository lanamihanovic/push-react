import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route></Route>
          </Routes>        
        </Router>
      <Navbar />
    </div>
  );
}

export default App;
