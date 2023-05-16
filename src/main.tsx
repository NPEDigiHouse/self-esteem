import { MantineProvider, PaginationStylesParams } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CustomFonts from "./CustomFonts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        headings: {
          fontWeight: 400,
          fontFamily: "Nunito Sans, sans-serif"
        },
        breakpoints: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        },
        primaryShade: 5,
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
          primary: [
            "#918cff",
            "#8782ff",
            "#7d78ff",
            "#736eff",
            "#6964ff",
            "#5f5af7",
            "#5550ed",
            "#4b46e3",
            "#413cd9",
            "#3732cf"
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
          "green-based": [
            "#50d095",
            "#46c68b",
            "#3cbc81",
            "#32b277",
            "#28a86d",
            "#1e9e63",
            "#149459",
            "#0a8a4f",
            "#008045",
            "#00763b"
          ],
          blue: [
            "#3B82F6",
            "#3B82F6",
            "#3B82F6",
            "#3B82F6",
            "#3B82F6",
            "#3B82F6",
            "#3B82F6",
            "#3B82F6",
            "#3B82F6",
            "#3B82F6"
          ]
        },
        primaryColor: "primary-text",
        fontFamily: "Nunito Sans, sans-serif",
        components: {
          Pagination: {
            styles: (theme, params: PaginationStylesParams) => ({
              item: {
                color: theme.colors["primary-text"][5]
              }
            })
          }
        }
      }}
    >
      <CustomFonts />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
