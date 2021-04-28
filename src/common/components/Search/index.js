import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Input, Button } from "antd";

import styles from "./styles.css";

const Search = inject("MainStore")(
  observer(({ MainStore }) => {
    const [strLenghtErrVisible, setStrLenghtErrVisibility] = useState(false);

    const onInputChange = e => {
      const { value } = e.target;
      const { fetchCoctails } = MainStore;

      let inputTimeout = setTimeout(() => {
        if (value.lenght < 3) {
          setStrLenghtErrVisibility(true);
        } else {
          if (strLenghtErrVisible) setStrLenghtErrVisibility(true);
          fetchCoctails(value);
        }
      }, 750);
    };

    return (
      <>
        <h1>Поиск по названию коктейля</h1>
        <Input placeholder="Название" onChange={onInputChange} />
        {strLenghtErrVisible && (
          <div>Запрос должен содержать более 2 символов</div>
        )}
        <Button type="primary">Искать</Button>
      </>
    );
  })
);

export default Search;
