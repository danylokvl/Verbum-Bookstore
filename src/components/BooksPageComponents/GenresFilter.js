import "./GenresFilter.less";
import chevronDownIcon from "../../assets/icons/chevron-down-26px-black.svg";
import { useState } from "react";

const fictionGenresArrayUkr = [
  "Детективи",
  "Трилери",
  "Бойовики",
  "Українська Література",
  "Казки, Міфи, Фольклор",
  "Поезія, Вірші",
  "Фентезі, Фантастика",
  "Проза",
  "П'єси",
];

const GenresFilter = () => {
  const [genresBlockHoverObject, setGenresBlockHoverObject] = useState({
    fiction: false,
    scientific: false,
    kids: false,
    education: false,
  });

  function handleMouseLeaveFromGenreBlock(genreBlockId) {
    const id = document.getElementById(genreBlockId);
  }

  return (
    <section className="genresFilter">
      <nav>
        <div
          className="genresFilter__genreBlock"
          id="fictionGenreBlock"
          onMouseEnter={() => {}}
          onMouseLeave={() => handleMouseLeaveFromGenreBlock("fictionGenreBlock")}
        >
          <span>Художня Література</span>
          <img src={chevronDownIcon} />
          <ul className="genresFilter__hiddenLinksList">
            {fictionGenresArrayUkr.map((genre, index) => (
              <li key={`${index * Math.random + genre}`}>
                <a>{genre}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="genresFilter__genreBlock" id="scientificLiteratureGenreBlock">
          <span>Наукова Література</span>
          <img src={chevronDownIcon} />
          <ul className="genresFilter__hiddenLinksList">
            <li>
              <a></a>
            </li>
          </ul>
        </div>
        <div className="genresFilter__genreBlock" id="kidsGenreBlock">
          <span>Для Дітей</span>
          <img src={chevronDownIcon} />
          <ul className="genresFilter__hiddenLinksList">
            <li>
              <a></a>
            </li>
          </ul>
        </div>
        <div className="genresFilter__genreBlock" id="educationGenreBlock">
          <span>Освіта</span>
          <img src={chevronDownIcon} />
          <ul className="genresFilter__hiddenLinksList">
            <li>
              <a></a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default GenresFilter;
