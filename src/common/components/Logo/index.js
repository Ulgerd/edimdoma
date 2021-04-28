import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";

import logo from "../../../assets/logo.png";
import styles from "./styles.css";

const Logo = inject("MainStore")(
  observer(props => {
    return <img src={logo} alt="logo" width="40px" height="40px" />;
  })
);

export default Logo;
