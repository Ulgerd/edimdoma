import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Input, Button, Tooltip } from "antd";

import "./styles.css";

const Search = inject("MainStore")(
  observer(({ MainStore }) => {
    const { fetchCoctails, cancelCoctailsFetch } = MainStore;
    const [strLenghtErrVisible, setStrLenghtErrVisibility] = useState(false);
    const [inputValue, setInputValue] = useState(false);

    let inputTimeout;

    const onInputChange = e => {
      const { value } = e.target;

      setInputValue(value);
      serverRequest(value);
    };

    const serverRequest = value => {
      clearTimeout(inputTimeout);

      inputTimeout = setTimeout(() => {
        if (value.length > 0 && value.length < 3) {
          setStrLenghtErrVisibility(true);
        } else if (value.length === 0) {
          setStrLenghtErrVisibility(false);
        } else {
          if (strLenghtErrVisible) setStrLenghtErrVisibility(false);
          fetchCoctails(value);
        }
      }, 750);
    };

    const onSearchClick = () => {
      cancelCoctailsFetch();
      fetchCoctails(inputValue);
    };

    return (
      <>
        <h1 className="searchBarHeader">Поиск по названию коктейля</h1>
        <div className="searchBarWrapper">
          <Tooltip
            placement="topLeft"
            title={"Запрос должен содержать более 2 символов"}
            visible={strLenghtErrVisible}
          >
            <Input placeholder="Название" onChange={onInputChange} />
          </Tooltip>
          <Button
            type="primary"
            className="searchButton"
            onClick={onSearchClick}
          >
            Искать
          </Button>
        </div>
      </>
    );
  })
);

export default Search;
