import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";
import SimpleSidebar from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <SimpleSidebar />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
