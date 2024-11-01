import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
