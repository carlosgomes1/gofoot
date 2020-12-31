import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";

import Routes from "./routes";
import AppProvider from "./hooks";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
