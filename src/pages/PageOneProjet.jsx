import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHead from "../components/PageHead";
import { useParams } from "react-router-dom";
import Projets from "../data/projets.json";
import Tags from "../components/Tags";
import ProjetContent from "../components/ProjetContent";
import DropList from "../components/DropList";

const PageOneProjet = () => {
  const { id } = useParams();
  const projet = Projets.find((item) => item.pageId === id);
  console.log(id);

  return (
    <div id="project__content__page" className="project__content__page">
      <PageHead
        headerText="Détails du projet"
        icon={<BsInfoCircleFill size={45} />}
      />
      <div className="page">
        <div className="page__container">
          <h2>{projet.title}</h2>
          <img
            className="page__container__img"
            src={projet.picture}
            alt={`image du ${projet.title}`}
          />
          <div className="page__container__tags">
            {projet.tags.map((tag, index) => (
              <Tags key={index} text={tag} />
            ))}
          </div>
        </div>
      </div>
      {/* Passer le projet à ProjetsDescription */}
      <ProjetContent projet={projet} />
      <DropList dropList={projet.dropList} />
    </div>
  );
};

export default PageOneProjet;
