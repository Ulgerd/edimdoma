import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { Table, Button } from "antd";
import { BackwardOutlined, SearchOutlined } from "@ant-design/icons";

import Logo from "../../components/Logo";
import COLUMNS from "../../constants/tableColumns";

import "./styles.css";

const CoctailPage = inject("MainStore")(
  observer(props => {
    const { MainStore, match } = props;
    const { fetchCoctailById, activeCoctail, setActiveCoctail } = MainStore;
    const {
      strDrinkThumb,
      strDrink,
      strCategory,
      strInstructions
    } = activeCoctail;

    const data = [];

    const isMobile = window.innerWidth < 480;

    Object.keys(activeCoctail).map(key => {
      if (key.match("strIngredient") && activeCoctail[key]) {
        const ingridientNum = parseInt(key.match(/\d+/));
        data.push({
          key: ingridientNum,
          number: ingridientNum,
          ingridient: activeCoctail[key],
          quantity: activeCoctail[`strMeasure${ingridientNum}`],
          image: (
            <img
              className={"ingridientImage"}
              src={`https://www.thecocktaildb.com/images/ingredients/${activeCoctail[key]}-Small.png`}
              alt={`${activeCoctail[key]} foto`}
            />
          )
        });
      }
      return null;
    });

    useEffect(() => {
      fetchCoctailById(match.params.id);
      return () => {
        setActiveCoctail({});
      };
    }, []);

    return (
      <>
        <div className={"coctailPageHeader"}>
          <Link to={`/`} className={"coctailPageBackButton"}>
            <BackwardOutlined />
          </Link>
          <Logo />

          <Link to={`/`} className={"coctailPageNewSearchButton"}>
            {isMobile ? <SearchOutlined /> : <Button>Новый поиск</Button>}
          </Link>
        </div>
        <div className={"coctailPageInfoWrapper"}>
          <img
            src={strDrinkThumb}
            className={"coctailImage"}
            alt="drink foto"
          />

          <div className={"coctailPageRow"}>
            <h2>{strDrink}</h2>
            <p>{strCategory}</p>
          </div>

          <div className={"coctailPageRow"}>
            <h2>Инструкция по приготовлению</h2>
            <p>{strInstructions}</p>
          </div>

          <div className={"coctailPageRow"}>
            <h4>Ингридиенты</h4>
            <Table
              columns={COLUMNS}
              dataSource={data}
              pagination={{ position: ["none", "none"] }}
            />
          </div>
        </div>
      </>
    );
  })
);

export default CoctailPage;
