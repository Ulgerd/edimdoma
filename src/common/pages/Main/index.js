import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Input } from "antd";

import Menu from "../../components/Menu";
import Search from "../../components/Search";
import CocktailsBlock from "../../components/CocktailsBlock";

import styles from "./styles.css";

const MainPage = inject("MainStore")(
  observer(({ MainStore }) => {
    return (
      <>
        <Menu />
        <Search />
        <CocktailsBlock />
      </>
    );
  })
);

export default MainPage;
