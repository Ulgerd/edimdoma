import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Input } from "antd";

import Menu from "../../components/Menu";
import Search from "../../components/Search";
import CocktailsBlock from "../../components/CocktailsBlock";

import styles from "./styles.css";

const CoctailPage = inject("MainStore")(
  observer(({ MainStore }) => {
    return <div>Коктейль</div>;
  })
);

export default CoctailPage;
