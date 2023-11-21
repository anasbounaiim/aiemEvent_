import pnl1 from "../../../public/pnl1.png";
import pnL5 from "../../../public/pnl5.png";
import pnL6 from "../../../public/pnl6.png";
import pnl4 from "../../../public/pnl4.png";
import pnl3 from "../../../public/pnl3.png";
import pnl2 from "../../../public/pnl2.png";
import pnl7 from "../../../public/pdpp2.png";


const commite = () => {
    return ( 
    <div>

<h1 className="text-[#484494] lg:mt-12 text-center pt-10 text-5xl px-2 lg:text-7xl font-custom">
Panel 1: Optimisation des ressources hydriques conventionnelles

        </h1>
        <div className="mt-10 lg:mt-16 h-fit flex lg:flex-row flex-col w-full justify-center items-center  gap-3">
           {/* new intervenat */}
           <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-3">
            <img src={pnL6} className="w-44" alt="ABDELLATIF MIRAOUI" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
            M. MUSTAPHA EL HABTI

            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
            Gouverneur Directeur de l'Eau
et de l'Assainissement DGCT
            </span>
          </div>
          {/* new intervenat */}
           <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-3">
            <img src={pnL5} className="w-44" alt="ABDELLATIF MIRAOUI" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
            M. MOHAMED CHTIOUI
            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
            Directeur de ABHT
            </span>
          </div>
           {/* new intervenat */}
           <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-3">
            <img src={pnl4} className="w-44" alt="ABDELLATIF MIRAOUI" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
            M. AHMED BOUARI

            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
            Directeur -DIAEA- <br />
Ministère de l'Agriculture, de la Pêche Maritime,
du Développement Rural et des Eaux et Forêts
            </span>
          </div>
        </div>
        {/* row2 */}
        <div className="mt-10 lg:mt-16 h-fit flex lg:flex-row flex-col w-full justify-center items-center  gap-3">
           {/* new intervenat */}
           <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-3">
            <img src={pnl7} className="w-44" alt="ABDELLATIF MIRAOUI" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
            M. MOKHTAR BZIOUI


            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
            Expert en Gestion des
Ressources en Eau
            </span>
          </div>
          {/* new intervenat */}
           <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-3">
            <img src={pnl3} className="w-44" alt="ABDELLATIF MIRAOUI" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
            M. DRISS EL HADANI
            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
            Conseiller Principal auprès du
Directeur - UNOOSA
            </span>
          </div>
           {/* new intervenat */}
           <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-3">
            <img src={pnl2} className="w-44" alt="ABDELLATIF MIRAOUI" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
            M. TAHRI KHALID
            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
            Directeur Planification
ONEE Branche Eau
            </span>
          </div>
        </div>
         {/* row2 */}
         <div className="mt-10 lg:mt-16 h-fit flex lg:flex-row flex-col w-full justify-center items-center  gap-3">
           {/* new intervenat */}
           <div className="w-96 h-w-96 flex flex-col justify-center items-center gap-3">
            <img src={pnl1} className="w-44" alt="ABDELLATIF MIRAOUI" />{" "}
            <span className="text-xl text-[#484494] font-custom1 font-bold">
            Modérateur : M. Mhamed Belghiti

            </span>{" "}
            <span className="text-base text-[#484494] font-custom1  text-center">
            Expert au département de l'Agriculture
 <span className="font-bold"> Rapporteurs: M. Yassine Zalim /Mme Rhita Bennouna</span>
            </span>
          </div>
          
           
        </div>
       

    </div> );
}
 
export default commite;