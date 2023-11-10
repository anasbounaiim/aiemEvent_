import { FaCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import logo from "../../../public/logo_aiem.png";
import affiche from "../../../public/affiche.png";
import bg_fade from "../../../public/bg-bg.png";
import bg from "../../../public/bg-Home.png";
import pdp1 from "../../../public/pdp1.png";
import pdp2 from "../../../public/pdp2.png";
import pdp3 from "../../../public/pdp3.png";

import car1 from "../../../public/car1.png";
import car2 from "../../../public/car2.png";
import car3 from "../../../public/car3.png";
import car4 from "../../../public/car4.png";
import car5 from "../../../public/car5.png";
import car6 from "../../../public/car6.png";
import maps from "../../../public/maps.png";

import Program from "./Program";
import CountDown from "./CountDown";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero page */}
      <div className={`bg-[url('../../../public/bgHomem.png')] bg-[#484494] lg:bg-[url('../../../public/bgHome.png')] bg-cover`}> 
        <div
          className={`w-full   min-h-screen  flex flex-col  justify-center items-center gap-6 p-7 md:p-8`}
        >
          <h1 className="text-white pt-16 text-3xl md:text-5xl lg:text-6xl font-custom text-center w-full md:w-[70%] leading-[2rem] md:leading-[4rem]">
            La Gestion Durable de L’Eau, Vers Un Modèle Innovant ET Résilient
          </h1>
          <h2 className="text-white  text-4xl md:text-5xl lg:text-6xl font-custom text-center w-full md:w-[70%] leading-[2rem] md:leading-[3rem]">
            25 Novembre 2023
          </h2>
          <h3 className="text-white text-xl md:text-5xl lg:text-3xl font-custom text-center w-full md:w-[70%] leading-[2rem] md:leading-[4rem]">
            Salle de conférences EMI Rabat
          </h3>

          <div className="flex flex-col text-lg font-medium text-white items-center w-full">
            <div>
              <CountDown />
            </div>
          </div>
        </div>
      </div>

      {/* About event page */}
      <div className="w-full h-full bg-white flex flex-col items-center justify-center lg:flex-row xl:flex-row">
        <img
          className="w-[90%] xl:w-[40rem] xl:mx-20 lg:w-[40rem] lg:m-20 items-center rounded-lg shadow-xl "
          src={affiche}
          alt=""
        />
        <div className=" border-4 lg:w-[700px] lg:h-[41rem] flex flex-col bg-white rounded-xl m-7 p-3 border-[#484494] ">
          <h1 className="lg:text-4xl text-3xl  lg:p-6 p-3 text-center font-custom text-[#484494]">
            ''LA GESTION DURABLE DE L’EAU, VERS UN MODÈLE INNOVANT ET
            RÉSILIENT''
          </h1>
          <p className="text-base font-custom1 p-6 text-center text-[#484494]">
            L'Association des Ingénieurs de l'École Mohammadia, avec son Club de
            Développement Durable (CDD) et l'École Mohammadia d'Ingénieurs
            (EMI), a obtenu le haut patronage de Sa Majesté le Roi Mohammed VI
            pour organiser une conférence-débat le 25 novembre 2023 à Rabat, sur
            le thème "Gestion durable de l'eau, vers un modèle innovant et
            résilient". Cette initiative s'inscrit dans l'engagement continu des
            Emistes pour soutenir les dynamiques et stratégies royales de
            développement. La conférence abordera la problématique du stress
            hydrique, conformément aux instructions royales, et cherchera des
            solutions alternatives et des politiques publiques efficaces pour
            atténuer les effets de la sécheresse et faire face à la pénurie
            d'eau. Le CDD, déjà engagé dans des thématiques de développement
            durable, a organisé une conférence internationale précédente sur la
            valorisation des déchets. Cette conférence actuelle vise à réfléchir
            sur des solutions pratiques liées à l'optimisation de l'utilisation
            des ressources en eau, la mobilisation des eaux non
            conventionnelles, le déploiement des nouvelles technologies, la
            gouvernance et le financement. Les recommandations seront enrichies
            par les spécificités régionales grâce à l'initiative "Territory
            workshop for Water Sustainability" lancée lors de la rencontre,
            comprenant des rencontres et ateliers dans les 12 régions du Maroc.
          </p>
        </div>
      </div>

      <div className="w-full hidden lg:block h-96 bg-cover lg:bg-[url('../../../public/bg-bg.png')]"></div>
      {/* PROGRAMME DE L’ATELIER */}

      <div className="w-full h-fit bg-[#484494] font-custom1 text-[#484494] ">
        <h1 className="text-white text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
          PROGRAMME DE L’ATELIER
        </h1>
        <Program color="blue" />
        <p className="text-white px-5 lg:px-40 mt-[-22px] pb-10 bg-[#484494]">
          <p>
            <span className="text-xl font-bold">
              Novembre 2023 - Mars 2024 :
            </span>

            <span>
              {" "}
              Organisation des Ateliers territoriaux Des ateliers territoriaux
              seront planifiés et organisés à travers le Royaume en mettant
              l’accent sur les spécificités régionales et les besoins y
              afférents.
            </span>
          </p>

          <p>
            <span className="text-xl font-bold ">22 Mars 2024 : </span>
            <span> Célébration de la journée mondiale de l’Eau à l’EMI</span>
          </p>
        </p>
      </div>

      <div className="w-full h-fit  lg:h-fit bg-white">
        <h1 className="text-[#484494] lg:mt-20 text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
          Nos intervenants
        </h1>
        <div className=" mt-10 lg:mt-28 h-fit flex lg:flex-row flex-col w-full justify-center items-center gap-3">
          <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-2">
            <img src={pdp1} className="w-44" alt="" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
              Mme Asmae Eloufir
            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
              LA SECRÉTAIRE GÉNÉRALE DU CLUB DE DÉVELOPPEMENT DURABLE CDD
            </span>
          </div>
          <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-2">
            <img src={pdp2} className="w-44" alt="" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
              Mme Nawal Gharmili Sefrioui
            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
              PRÉSIDENTE DE L’AIEM
            </span>
          </div>
          <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-2">
            <img src={pdp3} className="w-44" alt="" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
              M. Hassane Mahmoudi
            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
              DIRECTEUR DE L’ECOLE MOHAMMADIA D’INGÉNIEURS
            </span>
          </div>
        </div>
        <h1 className="text-[#484494] lg:mt-20 text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
          Quelques évènements du CDD
        </h1>

        <div className="w-full flex justify-center lg:mt-8">
          <div className="carousel carousel-center  lg:w-[70%] p-4 gap-7   rounded-box">
            <div className="carousel-item">
              <img src={car1} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={car2} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={car3} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={car4} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={car5} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={car6} className="rounded-box" />
            </div>
          </div>
        </div>
      </div>
     
      
      <div className="flex justify-center my-28 flex-col lg:flex-row">
      <h1 className="text-[#484494] lg:hidden  text-center mb-10  text-5xl px-2 lg:text-7xl font-custom">
          Location
        </h1>

        <a href="https://maps.app.goo.gl/PxRo57PAMgeWcZwd9" target="_blank">
          <img src={maps} className="w-[700px] rounded-l-xl" alt="" />{" "}
        </a>
        <div className="hidden lg:block w-96 bg-[#484494] rounded-r-xl p-7">
           <h1 className="text-6xl font-custom text-white">Location</h1> <br />
          <p className="text-white font-custom1 m-2 font-extralight ">Av. Ibn Sina, Rabat - 25 nov 2023</p> 
          <p className="text-white font-custom1 m-2 font-extralight ">La manifestation aura lieu du 25 novembre 2023 dans notre toute nouvelle installation, Av. Ibn Sina, Rabat. </p>
          <p className="text-white font-custom1 m-2 font-extralight ">Veuillez noter : Il ne s'agit PAS du Forum des magasins OU du Palais des Césars - il s'agit d'un tout nouveau lieu situé à travers la promenade de la LINQ, sous la Grande Roue d'Observation High Roller. Adresse de l'événement : Av. Ibn Sina, Rabat.</p>
           <br />
          <button className="btn btn-wide bg-white text-[#484494] border-none hover:bg-slate-100">GO to maps</button>
        </div>
        
      </div>

      <footer className="footer p-10 bg-[#484494] ">
        <aside>
          <img src={logo} className="w-24" alt="" />
          <p>
            BuuuuPNGart
            <br />
            Providing reliable art since born
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
