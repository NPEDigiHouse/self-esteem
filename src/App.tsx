import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.page";
import PersonalityType from "./pages/personality-type/PersonalityType.page";
import React from "react";
import AppContextProvider from "./context/app-context.context";
import PersonalityTest from "./pages/personality-test/PersonalityTest.page";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personality-type" element={<PersonalityType />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
