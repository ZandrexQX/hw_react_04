import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import store from "./components/store";
import ThemeToggle from "./components/ThemeToggle";
import {Provider} from "react-redux";
import React from "react";

function App() {
  return (
    <Provider store={store}>
        <ThemeToggle>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeToggle>
    </Provider>
  );
}

export default App;
