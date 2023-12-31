import { FaCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import logo from "../../../public/logo_aiem.png";
import affiche from "../../../public/affiche.png";
import bg_fade from "../../../public/bg-bg.png";
import bg from "../../../public/bgHome.png";
import pdp1 from "../../../public/pdp1.png";
import pdp2 from "../../../public/pdp2.png";
import pdp3 from "../../../public/pdp3.png";
import pdp4 from "../../../public/pdp4.png";
import pdp5 from "../../../public/pdp5.png";
import pdp6 from "../../../public/pdp6.png";

import faffich1 from "../../../public/faffich1.jpg";
import faffich2 from "../../../public/faffich2.jpg";
import faffich3 from "../../../public/faffich3.jpg";
import faffich4 from "../../../public/faffich4.jpg";
import faffich5 from "../../../public/faffich5.jpg";

import car1 from "../../../public/car1.png";
import car2 from "../../../public/car2.png";
import car3 from "../../../public/car3.png";
import car4 from "../../../public/car4.png";
import car5 from "../../../public/car5.png";
import car6 from "../../../public/car6.png";
import maps from "../../../public/maps.png";
import water from "../../../public/waterEcole.png";
import panel from "../../../public/panel1.jpg";
import pane2 from "../../../public/panel2.jpg";

import afch_gif from "../../../public/animation_affiche.gif"

import Program from "./Program";
import CountDown from "./CountDown";
import Footer from "../Footer";
import Commite from "./comite";
import Commit2 from "./comite2";
import Sponsors from "./Sponsors";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero page page*/}
      <div className={`bg-home1 bg-[#484494] md:bg-home1m bg-cover`}> 
        <div
          className={`w-full min-h-screen  flex flex-col justify-center items-center gap-6 p-7 md:p-8`}
        >
          <h1 className="text-white pt-16 text-4xl md:text-5xl lg:text-5xl font-custom text-center w-full md:w-[70%] leading-[2rem] md:leading-[4rem]">
            La Gestion Durable de L’Eau, Vers Un Modèle Innovant ET Résilient
          </h1>
          <h2 className="text-white  text-4xl md:text-5xl lg:text-5xl font-custom text-center w-full md:w-[70%] leading-[2rem] md:leading-[3rem]">
            25 Novembre 2023 à 08h00
          </h2>
         
          <h3 className="text-white text-xl md:text-5xl lg:text-2xl font-custom text-center w-full md:w-[70%] leading-[2rem] md:leading-[4rem]">
            Salle de conférences EMI Rabat
          </h3>
          <a target="_blank" href="https://www.aiem.ma/agenda/la-gestion-durable-de-l-eau-vers-un-modele-innovant-et-resilient-193" className="bg-white cursor-pointer hover:bg-slate-50 px-16 py-3 rounded-lg font-bold font-custom1 uppercase text-[#484494]">S'inscrire</a>

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
          className="w-[90%] xl:w-[30rem] xl:mx-20 lg:w-[30rem] lg:m-20 items-center rounded-lg shadow-xl "
          src={affiche}
          alt=""
        />
        <div className="overflow-y-scroll border-4 lg:w-[600px] lg:h-[40rem] flex flex-col bg-[#484494] text-white rounded-xl m-9 p-3 border-[#484494] ">
          <h1 className="lg:text-3xl text-2xl  lg:p-6 p-3 text-center font-custom ">
            ''LA GESTION DURABLE DE L’EAU, VERS UN MODÈLE INNOVANT ET
            RÉSILIENT''
          </h1>
          <p className="text-sm font-custom1 p-6 break-all  ">
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
          <a target="_blank" href="https://www.aiem.ma/agenda/la-gestion-durable-de-l-eau-vers-un-modele-innovant-et-resilient-193" className="bg-white text-center m-auto w-full cursor-pointer hover:bg-slate-50 px-16 py-3 rounded-lg font-bold font-custom1 uppercase text-[#484494]">S'inscrire</a>

        </div>
      </div>
      <div className="w-full h-full bg-white flex flex-col items-center justify-center lg:mb-4 lg:mt[-20px] lg:flex-row xl:flex-row">
        <img src={afch_gif} alt="" />

      </div>

      {/* PROGRAMME DE L’ATELIER */}

      <div className="w-full flex flex-col justify-center lg:h-[900px] p-4  bg-[#484494] font-custom1 text-[#484494] ">
        <h1 className="text-white text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
          PROGRAMME DE L’ATELIER
        </h1>
        <Program color="blue" />
        <p className="text-white px-5 lg:px-40 mt-[-22px] pb-10 bg-[#484494]">
          {/* Program 2024 */}

          {/* 
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
          */}
        </p>
        
      </div>

      <div className="w-full h-fit  lg:h-fit bg-white">
        <h1 className="text-[#484494] lg:mt-12 text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
        Conférence Inaugurale
        </h1>
    
       
        
        {/* <Commit2/> */}
        <div className="flex justify-center items-center mt-6  lg:mt-24">
          <img src={faffich5} alt="" />
        </div>

        <div className="flex justify-center items-center mt-6  lg:mt-24">
          <img src={faffich1} alt="" />
        </div>
        <div className="flex justify-center items-center mt-6  lg:mt-24">
          <img src={faffich2} alt="" />
        </div>
        <div className="flex justify-center items-center mt-6  lg:mt-24">
          <img src={faffich3} alt="" />
        </div>
        
<div className="flex justify-center items-center mt-6  lg:mt-24">
          <img src={faffich4} alt="" />
        </div>
        <Commite/>


        <div className="flex flex-row p-4 lg:p-0 justify-center items-center w-full h-[700px] mt-5 lg:h-[700px] bg-[#484494] lg:mt-20">
            <div className="bg-white flex flex-col gap-5 p-14 font-custom1 text-[#484494] w-[500px] h-[600px] lg:h-[500px] lg:rounded-none rounded-xl lg:rounded-l-lg  xl:rounded-l-lg">
              <span className=" font-semibold">S'INSCRIRE</span> 
              <span className="text-5xl font-custom  ">Soyez les premiers informés</span>
              <span>Cliquez sur le bouton ci-dessous pour vous inscrire et être le premier à être informé des nouveaux intervenants, des remises spéciales et des événements sociaux et de réseautage spéciaux du Traffic & Conversion Summit.</span> 
             <a target="_blank" href="https://www.aiem.ma/agenda/la-gestion-durable-de-l-eau-vers-un-modele-innovant-et-resilient-193" className="w-48 py-4 bg-[#484494] hover:bg-[#4d4990] text-white text-center font-bold rounded-lg">S'INSCRIRE</a>
              </div>      
            <div className="bg-red-500 hidden lg:block w-[500px] h-[500px] overflow-hidden rounded-r-lg">
              <img src={water} alt="" />
              </div>      

          

        </div>
        <h1 className="text-[#484494] lg:mt-20 text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
          Quelques évènements du CDD
        </h1>

        <div className="w-full flex justify-center ">
        <div className="w-full flex justify-center lg:mt-8">
          <div className="carousel carousel-center h-[400px] lg:h-[500px]  lg:w-[70%] p-4 gap-7   rounded-box">
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
      </div>
      {/*
      <h1 className="text-[#484494] lg:mt-12 text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
      Sponsors
        </h1>

       <Sponsors/> */}
     
      
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
          <a href="https://maps.app.goo.gl/PxRo57PAMgeWcZwd9" target="_blank" className="btn btn-wide bg-white text-[#484494] border-none hover:bg-slate-100"> Allez à la carte</a>
        </div>
        
      </div>

    <Footer/>
      
    </div>
  );
};

export default Home;
