import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
