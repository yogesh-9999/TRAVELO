import React, { useState } from "react";
import "./Navbar.css";

import { Navi } from "./Navi";

import { Header1 } from "./Header1";

export const Navbar = () => {
  return (
    <div className="sticky">
      <Navi className="nvi" />

      <Header1 />
    </div>
  );
};
