import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import TestingPage from "./Pages/TestingPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/under-development" element={<h3>under-development</h3>} />
        <Route path="/testing" element={ <TestingPage /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
