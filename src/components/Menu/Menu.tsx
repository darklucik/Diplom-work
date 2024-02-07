import React, { useState } from "react";
import { StyledMenu } from "./Menu.style";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul className="menu">
        <li className="menuName">
          <a href="/countries" className="name">
            Футбол
          </a>
        </li>
        
      </ul>
    </StyledMenu>
  );
};
