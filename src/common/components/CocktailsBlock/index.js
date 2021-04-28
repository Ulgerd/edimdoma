import React from "react";
import { Card, Divider, Button } from "antd";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import "./styles.css";

const CoctailsBlock = inject("MainStore")(
  observer(({ MainStore }) => {
    const { coctails } = MainStore;

    return (
      <>
        <Divider orientation="left">Результаты поиска</Divider>
        <div className="coctailsBlock">
          {coctails?.map(coctail => {
            const { strDrinkThumb, strDrink, strCategory, idDrink } = coctail;
            return (
              <Link
                to={`/card/${idDrink}`}
                className="coctailCard"
                key={idDrink}
              >
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
        </div>
      </>
    );
  })
);

export default CoctailsBlock;
