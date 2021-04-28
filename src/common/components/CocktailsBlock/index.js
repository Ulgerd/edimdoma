import React, { useState } from "react";
import { Card, Divider, Button } from "antd";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";
import styles from "./styles.css";

const { Meta } = Card;

const CoctailsBlock = inject("MainStore")(
  observer(({ MainStore }) => {
    const { coctails } = MainStore;

    console.log(coctails);
    const style = { background: "#0092ff", padding: "8px 0" };

    return (
      <>
        <Divider orientation="left">Результаты поиска</Divider>
        <div classname={styles.row}>
          {coctails.map(coctail => {
            const { strDrinkThumb, strDrink, strCategory, idDrink } = coctail;
            return (
              <Link to={`/card/${idDrink}`} className={styles.imageWrap}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={strDrinkThumb} />}
                >
                  <h2>{strDrink}</h2>
                  <p>{strCategory}</p>
                  <Button>Посмотреть</Button>
                </Card>
              </Link>
            );
          })}
          }
        </div>
      </>
    );
  })
);

export default CoctailsBlock;

// Результаты выводить в виде карточек.
// - Картинкой поле "strDrinkThumb"
// - Названием поле "strDrink" (заголовок h2)
// - Под названием категория из поля "strCategory"
// - Кнопка "Посмотреть"
// - Вся карточка должна быть так же кликабельна как и кнопка "Посмотреть"
