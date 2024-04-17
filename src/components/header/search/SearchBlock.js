import { useState } from "react";

import CardSmall from "../../cards/cardSmall/CardSmall.jsx";
import "./SearchBlock.less";
import search from "../../../assets/icons/search.svg";
import book1 from "../../../assets/images/book1.jpg";
import xmark from "../../../assets/icons/xmark.svg";

const SearchBlock = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchFormSubmit = () => {
    //console.log(searchText);
  };

  return (
    <div className="searchBlock">
      <button
        id="searchBlock__xmarkBtn"
        onClick={() => document.querySelector(".searchBlock").classList.toggle("active")}
      >
        <img src={xmark} />
      </button>

      <div className="searchBlock__topContentContainer">
        <h4>Пошук</h4>
        <form className="searchBlock__inputForm" onSubmit={handleSearchFormSubmit}>
          <input
            name="searchInput"
            value={searchText}
            type="search"
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Введи назву або автора"
            autoComplete="off"
          />
          <button type="submit">
            <img src={search} />
          </button>
        </form>
      </div>
      <div className="searchBlock__bottomContentContainer">
        <h5>Популярне зараз</h5>
        <div className="searchBlock__popularItemsContainer">
          <CardSmall itemImg={book1} itemName="Тіло, мій дім" itemPrice="290₴" />
          <CardSmall itemImg={book1} itemName="Тіло, мій дім" itemPrice="290₴" />
          <CardSmall itemImg={book1} itemName="Тіло, мій дім" itemPrice="290₴" />
          <CardSmall itemImg={book1} itemName="Тіло, мій дім" itemPrice="290₴" />
          <CardSmall itemImg={book1} itemName="Тіло, мій дім" itemPrice="290₴" />
          <CardSmall itemImg={book1} itemName="Тіло, мій дім" itemPrice="290₴" />
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
