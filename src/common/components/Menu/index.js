import React, { useState } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { inject, observer } from "mobx-react";

import Logo from "../Logo";

import styles from "./styles.css";

const MainPage = inject("MainStore")(
  observer(({ MainStore }) => {
    const [current, setAuthorVisible] = useState("tab1");

    const handleClick = e => {
      setAuthorVisible(e.key);
    };

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Logo />
        <Menu.Item key="tab1" icon={<MailOutlined />}>
          Пункт 1
        </Menu.Item>
        <Menu.Item key="tab2" icon={<AppstoreOutlined />}>
          Пункт 2
        </Menu.Item>
        <Menu.Item key="tab3" icon={<SettingOutlined />}>
          Пункт 3
        </Menu.Item>
      </Menu>
    );
  })
);

export default MainPage;
