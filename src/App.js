import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Dia from "./Pages/Dia/Dia";
import Noite from "./Pages/Noite/Noite";
import { GlobalStyles } from "./GlobalStyles";
import React from "react";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Noite />} />
          <Route path="/dia" element={<Dia />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
