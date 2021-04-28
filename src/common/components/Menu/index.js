import React, { useState } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuOutlined
} from "@ant-design/icons";
import { inject, observer } from "mobx-react";

import cx from "classnames";

import "./styles.css";

const MainPage = inject("MainStore")(
  observer(({ MainStore }) => {
    const [activeMenuElem, setActiveMenuElem] = useState("tab1");
    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
    const isDesktop = window.innerWidth > 768;

    const handleClick = e => {
      setActiveMenuElem(e.key);
    };

    const toggleMenuVisibility = e => {
      setMobileMenuVisibility(!isMobileMenuVisible);
    };

    if (!isDesktop) {
      return (
        <>
          <div className="burgerWrapper">
            <MenuOutlined onClick={toggleMenuVisibility} />
          </div>
          <div
            className={cx(
              "mobileMenuWrapper",
              isMobileMenuVisible && "mobileMenuVisible"
            )}
          >
            <Menu
              onClick={handleClick}
              selectedKeys={[activeMenuElem]}
              mode="vertical"
            >
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
          </div>
        </>
      );
    } else {
      return (
        <Menu
          onClick={handleClick}
          selectedKeys={[activeMenuElem]}
          mode="horizontal"
        >
          <Menu.Item key="tab1" icon={<MailOutlined />}>
            Пункт 1
          </Menu.Item>
          <span>{"|"}</span>
          <Menu.Item key="tab2" icon={<AppstoreOutlined />}>
            Пункт 2
          </Menu.Item>
          <span>{"|"}</span>
          <Menu.Item key="tab3" icon={<SettingOutlined />}>
            Пункт 3
          </Menu.Item>
        </Menu>
      );
    }
  })
);

export default MainPage;
