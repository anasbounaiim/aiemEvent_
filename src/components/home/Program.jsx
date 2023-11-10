import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap px-5 lg:px-40">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-3 items-center"
            role="tablist"
          >
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                08:30-09:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                09:00-10:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                10:00-10:30
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                10:30-11:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                11:00-12:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block  " +
                  (openTab === 6
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                12:00-13:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 7
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                13:00-14:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 8
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                13:00-14:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 9
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                13:00-14:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 10
                    ? "text-white bg-[#5955b0]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(10);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                13:00-14:00
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words h-80 overflow-y-scroll bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="text-xl font-bold px-4">
                    Accueil et enregistrement des participants
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    <span className="text-xl font-bold px-4 ">
                      Cérémonie officielle d’ouverture
                    </span>
                    <br />

                    <p className="px-5 mt-3">
                      - Ministère de l’Enseignement Supérieur, de la Recherche
                      Scientifique et l’Innovation
                      <br />
                      - Ministère de l’Équipement et de l’Eau
                      <br />
                      - Ministère de l’Agriculture, de la Pèche Maritime, du
                      Développement Rural et des Eaux et Forets
                      <br />
                      - Ministère de l’intérieur
                      <br />
                      - Ministère de la Transition Énergétique et Développement
                      Durable
                      <br />
                      - Ministère de l’Industrie et du Commerce
                      <br />
                      - Ministère de la Transition Numérique et de la Réforme de
                      l’Administration
                      <br />
                      - École Mohammadia d’Ingénieurs
                      <br />- Association des Ingénieurs de l’École Mohammadia
                    </p>
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    <span className="text-xl font-bold px-4 ">
                      Séance plénière : Sécurité hydrique et Nouveau Modèle de
                      Développement
                    </span>
                    <br />
                    <p className="text-lg font-medium px-4 pt-2 ">
                      Modérateur général : Slama Lambirik
                    </p>
                    <br />
                    <p className="px-4 ">
                      Synthèse des réflexions du Club Développement Durable
                      croisé avec le Nouveau Modèle de Développement :
                      Recommandations préliminaires, résumé exécutif, commission
                      du livre blanc.
                    </p>
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    <span className="text-xl font-bold px-4 ">Pause-café</span>
                    <br />
                  </p>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>
                    <span className="text-xl font-bold pl-4 ">
                      Table ronde 1 : Optimisation des ressources hydriques
                      conventionnelles
                    </span>
                    <br />
                    <p className="text-lg font-medium px-4 pt-2 ">
                      Modérateur : Mhamed Belghiti (Rapporteurs : élèves
                      ingénieurs à identifier)
                    </p>
                    <br />
                    <p className="px-4 ">
                      - Stratégies d’optimisation de la gestion de la demande
                      d’eau potable et industrielle :{" "}
                      <span className="font-bold">Mustapha El Habti</span>{" "}
                      <br />
                      -Sensibilisation et économie de l’eau : Promouvoir une
                      culture de préservation et d’utilisation responsable :
                      <span className="font-bold"> Abderrahim El Hafidi</span>
                      <br /> - Quelles approches régionales pour une
                      exploitation rationnelle et durable des ressources en eau
                      souterraines ? :{" "}
                      <span className="font-bold">Abdelaziz Zerouali</span>
                      <br /> - Comment concilier les besoins agricoles et la
                      préservation des ressources hydriques pour une agriculture
                      durable : <span className="font-bold">
                        Ahmed Bouari
                      </span>{" "}
                      <br /> - Enjeux et opportunités des transferts d’eau entre
                      les bassins hydrauliques :{" "}
                      <span className="font-bold">Mokhtar Bzioui</span>
                      <br />- Apport des technologies spatiales de surveillance
                      et de gestion des ressources hydriques :{" "}
                      <span className="font-bold">Driss El Hadani</span>
                    </p>
                  </p>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <p>
                    <span className="text-xl font-bold px-4 ">
                      Table ronde 2 : Valorisation des ressources hydriques non
                      conventionnelles
                    </span>
                    <p className="text-lg font-medium px-4 pt-2 ">
                      Modérateur : Abdelkader Saidi (Rapporteurs : élèves
                      ingénieurs à identifier)
                    </p>

                    <p className="px-4 mt-5">
                      - Réutilisation des eaux usées traitées au Maroc – Etat
                      Actuel et Perspectives :{" "}
                      <span className="font-bold">
                        Safae Amarti et Abdelkader Saidi
                      </span>{" "}
                      <br />- Dessalement de l’eau de mer et de l’eau saumâtre -
                      Etat Actuel et Perspectives :{" "}
                      <span className="font-bold">Khalid Tahri</span> <br />-
                      Réutilisation des eaux usées traitées : Avantages, défis
                      et bonnes pratiques :{" "}
                      <span className="font-bold">Zineb Benjelloun</span> <br />
                      - Dessalement de l’eau de mer et de l’eau saumâtre :
                      Avancées technologiques et perspectives pour une
                      utilisation durable :{" "}
                      <span className="font-bold">Jawad El Kharraz</span> <br />
                      - Gestion des eaux pluviales : Meilleures pratiques de
                      collecte et d’utilisation efficace :{" "}
                      <span className="font-bold">Moulay Driss Hasnaoui</span>{" "}
                      <br />
                    </p>
                  </p>
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                  <p>
                    <span className="text-xl font-bold px-4 ">
                      Table Ronde 3 : Recherche, Développement, Innovation et
                      Éducation : Pour une gestion durable et intelligente de
                      l’eau
                    </span>
                    <p className="text-lg font-medium px-4 pt-2 ">
                      Modérateur : Driss Ouazar (Rapporteurs : élèves ingénieurs
                      à identifier)
                    </p>

                    <p className="px-4 mt-5">
                      - Adaptation aux changements climatiques : Stratégies et
                      les solutions innovantes pour faire face aux défis futurs
                      : <span className="font-bold">Abdallah Mokssit</span>{" "}
                      <br />- Gestion optimisée des ressources en eaux
                      souterraines :{" "}
                      <span className="font-bold">Abdelkader Larabi</span>{" "}
                      <br />- Avancées technologiques dans le traitement et le
                      dessalement de l’eau : Solutions pour une utilisation
                      efficace des ressources hydriques :{" "}
                      <span className="font-bold">
                        {" "}
                        Jamal Eddine Jellal et Naoual Semlali
                      </span>{" "}
                      <br />- Apport des technologies avancées (IoT, IA,
                      Blockchain, etc.) dans la gestion de l’eau : Potentiels et
                      applications concrètes :
                      <span className="font-bold"> Mohamed Essaidi</span> <br />
                      - Bassins hydrauliques : Stratégies multi-secteurs pour
                      une coordination et une utilisation optimales des
                      ressources en eau :
                      <span className="font-bold"> Charafat Afailal</span>{" "}
                      <br />- Éducation et sensibilisation pour une gestion
                      durable de l’eau : Comment renforcer la conscience
                      environnementale et favoriser un changement de
                      comportement ? :{" "}
                      <span className="font-bold"> Mohamed Alaoui</span>
                    </p>
                  </p>
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                  <p>
                    <span className="text-xl font-bold px-4 ">
                      Table ronde 4 : Financements et Modèles innovants
                    </span>
                    <p className="text-lg font-medium px-4 pt-2 ">
                      Modérateur : Mohamed Benahmed (Rapporteurs : élèves
                      ingénieurs à identifier)
                    </p>
                    <p className="px-4 mt-5">
                      - Réformes institutionnelles : Quelles mesures pour
                      améliorer la gouvernance et la régulation de l’eau ? :{" "}
                      <span className="font-bold">Houria Tazi Sadek</span>{" "}
                      <br />
                      (COALMA + CNDH-RSK) - Financer la durabilité hydrique :
                      Opportunités de la Finance Climatique dans la gestion de
                      l’eau : <span className="font-bold">
                        Mohamed Fikrat
                      </span>{" "}
                      <br />- Dispositifs collaboratifs pour la co-conception,
                      la co-implémentation et le financement de feuilles de
                      routes régionales contextualisées de l’eau :{" "}
                      <span className="font-bold">Mohamed Benahmed</span> <br />
                      - Financements Internationaux : WB, GIZ, KFW, AFD, USFTI{" "}
                    </p>
                  </p>
                </div>
                <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                  <p>
                  <span className="text-xl font-bold px-4 ">
                  Restitution de la journée
                    </span>
                    <p className="px-4 mt-5">
                    - Résumé des points clés et des discussions de chaque table ronde <br />
                    - Identification et lecture des principales recommandations
                    </p>
                  

                  </p>
                </div>
                <div
                  className={openTab === 10 ? "block" : "hidden"}
                  id="link10"
                >
                  <p>
                  <span className="text-xl font-bold px-4 ">
                  Déjeuner et Réseautage
                    </span>
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      return <Tabs color="lightBlue" />;
    </>
  );
}
