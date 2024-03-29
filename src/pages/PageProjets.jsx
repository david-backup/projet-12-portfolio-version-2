import React, { useState } from "react";
import { BsMouse3 } from "react-icons/bs";
import PageHead from "../components/PageHead";
import DataProjets from "../data/projets.json";
import filterData from "../data/filter.json";
import { Link } from "react-router-dom";

const PageProjets = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? DataProjets
      : DataProjets.filter((item) => item.id === filteredvalue);

  return (
    <section id="projetsPage" className="projetsPage">
      <PageHead headerText="Mes projets" icon={<BsMouse3 size={45} />} />

      <div className="projetsPage__content">
        <ul className="projetsPage__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="projetsPage__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="projetsPage__content__cards__item"
              key={`cardItem${item.title.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="projetsPage__content__cards__item__img-wrapper">
                <a>
                  <img src={item.picture500} alt={`image du ${item.title}`} />
                </a>
                <p>{item.title}</p>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.title}</p>
                    <Link to={`/projet/${item.pageId}`}>
                      <button>Visiter</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageProjets;
