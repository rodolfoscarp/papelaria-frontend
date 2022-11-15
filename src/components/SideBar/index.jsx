import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Link to="/">Vendas</Link>
      <Link to="/comissao">Comissoes</Link>
    </>
  );
};

export default SideBar;
