import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { Table, Button } from "antd";
import { BackwardOutlined } from "@ant-design/icons";

import Logo from "../../components/Logo";

import styles from "./styles.css";

const columns = [
  {
    title: "№",
    width: 100,
    dataIndex: "number",
    key: "number",
    fixed: "left"
  },
  {
    title: "Ингридиент",
    width: 200,
    dataIndex: "ingridient",
    key: "ingridient",
    fixed: "left"
  },
  {
    title: "Количество",
    width: 200,
    dataIndex: "quantity",
    key: "quantity",
    fixed: "left"
  },
  {
    title: "Фото",
    width: 200,
    dataIndex: "image",
    key: "image",
    fixed: "left"
  }
];

const CoctailPage = inject("MainStore")(
  observer(props => {
    const { MainStore, match } = props;
    const { fetchCoctailById, activeCoctail } = MainStore;
    const {
      strDrinkThumb,
      strDrink,
      strCategory,
      strInstructions
    } = activeCoctail;

    const data = [];

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
              src={`https://www.thecocktaildb.com/images/ingredients/${activeCoctail[key]}-Small.png`}
              alt={`${activeCoctail[key]} foto`}
            />
          )
        });
      }
    });

    useEffect(() => {
      fetchCoctailById(match.params.id);
    }, []);

    return (
      <>
        <div>
          <Link to={`/`}>
            <BackwardOutlined />
          </Link>
          <Logo />
        </div>
        <div className={styles.body}>
          <img src={strDrinkThumb} alt="drink foto" />
          <h2>{strDrink}</h2>
          <p>{strCategory}</p>

          <h2>Инструкция по приготовлению</h2>
          <div>{strInstructions}</div>

          <h4>Ингридиенты</h4>
          <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />

          <Link to={`/`}>
            <Button>Новый поиск</Button>
          </Link>
        </div>
      </>
    );
  })
);

export default CoctailPage;
