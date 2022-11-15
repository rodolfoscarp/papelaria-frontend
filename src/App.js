import { Toolbar } from "@mui/material";
import React, { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Venda from "./pages/Venda";
import Comissao from "./pages/Comissao";
import NovaVenda from "./pages/NovaVenda";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleNavBar = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <>
      <Header handleNavBar={handleNavBar} />
      <NavBar isOpen={open} handler={handleNavBar} />
      <Toolbar>
        <Routes>
          <Route path="/" element={<Venda />} />
          <Route path="/comissao" element={<Comissao />} />
          <Route path="/novavenda" element={<NovaVenda />} />
        </Routes>
      </Toolbar>
    </>
  );
};

export default App;
