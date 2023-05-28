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
import { MantineProvider, PaginationStylesParams } from "@mantine/core";
import { ROUTES } from "./utils/const/routes";

function App() {
  return (
    <AppContextProvider>
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            "primary-text": [
              "#657387",
              "#5b697d",
              "#515f73",
              "#475569",
              "#3d4b5f",
              "#334155",
              "#29374b",
              "#1f2d41",
              "#152337",
              "#0b192d"
            ],
            "secondary-text": [
              "#c6d5ea",
              "#bccbe0",
              "#b2c1d6",
              "#a8b7cc",
              "#9eadc2",
              "#94a3b8",  
              "#8a99ae",
              "#808fa4",
              "#76859a",
              "#6c7b90"
            ],
            primaryBlue: [
              "#918cff",
              "#8782ff",
              "#7d78ff",
              "#736eff",
              "#6964ff",
              "#1C82AD",
              "#5550ed",
              "#4b46e3",
              "#413cd9",
              "#3732cf"
            ],
            primaryDarkBlue: [
              "#918cff",
              "#8782ff",
              "#7d78ff",
              "#736eff",
              "#00337C",
              "#5f5af7",
              "#5550ed",
              "#4b46e3",
              "#413cd9",
              "#3732cf"
            ],
            primaryDarkerBlue: [
              "#918cff",
              "#8782ff",
              "#7d78ff",
              "#736eff",
              "#6964ff",
              "#13005A",
              "#5550ed",
              "#4b46e3",
              "#413cd9",
              "#3732cf"
            ],
            primaryGreen: [
              "#918cff",
              "#8782ff",
              "#7d78ff",
              "#736eff",
              "#6964ff",
              "#03C988",
              "#5550ed",
              "#4b46e3",
              "#413cd9",
              "#3732cf"
            ],
            secondary: [
              "#ffffff",
              "#ffffff",
              "#fcfbff",
              "#f2f1ff",
              "#e8e7fb",
              "#deddf1",
              "#d4d3e7",
              "#cac9dd",
              "#c0bfd3",
              "#b6b5c9"
            ],
            error: [
              "#ff5e88",
              "#ff547e",
              "#ff4a74",
              "#ff406a",
              "#ff3660",
              "#ff2c56",
              "#f5224c",
              "#eb1842",
              "#e10e38",
              "#d7042e"
            ],
            background: [
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#f5f5f5",
              "#ebebeb",
              "#e1e1e1",
              "#d7d7d7"
            ],
            divider: [
              "#e7f4ff",
              "#ddeaf9",
              "#d3e0ef",
              "#c9d6e5",
              "#bfccdb",
              "#b5c2d1",
              "#abb8c7",
              "#a1aebd",
              "#97a4b3",
              "#8d9aa9"
            ]
          }
        }}
        // theme={mantineTheme}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={ROUTES.anxietyClass} element={<PersonalityType />} />
            <Route path={ROUTES.anxietyTest} element={<PersonalityTest />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </AppContextProvider>
  );
}

export default App;
