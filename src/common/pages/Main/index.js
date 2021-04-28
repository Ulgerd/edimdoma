import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Input } from "antd";

import Menu from "../../components/Menu";
import Search from "../../components/Search";
import CocktailsBlock from "../../components/CocktailsBlock";
import Logo from "../../components/Logo";

import styles from "./styles.css";

const MainPage = inject("MainStore")(
  observer(({ MainStore }) => {
    return (
      <>
        <div className="logoWrapper">
          <Logo />
        </div>
        <Menu />
        <Search />
        <CocktailsBlock />
      </>
    );
  })
);

export default MainPage;
