import abt_aiem from "../../../public/abt_aiem.jpg";
import cdd_abt from "../../../public/cdd_abt.png";
import Footer from "../Footer"

const About = () => {
  return (
    <>
      <div className="w-full h-full bg-white px-4 py-4 lg:px-32">
        <h1 className="text-5xl text-[#484494]  pt-32 pb-6 text-center font-custom">
          A PROPOS DE L’AIEM
        </h1>
        <p className="text-[#484494] font-custom1 text-lg break-keep">
          L’AIEM a été fondée en 1964 par les ingénieurs de la première
          promotion de l’EMI. Aujourd’hui, avec plus de 12.000 membres, elle
          constitue le plus grand groupement de lauréats au Maroc. Outre les
          instances nationales composées du Bureau National et Conseil National,
          l’AIEM dispose de :
          <ul>
            <li>- 11 bureaux régionaux ;</li>
            <li>- 5 collectifs professionnels</li>
            <li>
              - 3 représentations internationales (Afrique, Europe et Amérique
              du Nord).
            </li>
          </ul>
          La stratégie orientant les actions de l’AIEM s’aligne sur les trois
          principes suivants :
          <ul>
            <li>
              • Permettre aux lauréats de l’EMI de vivre ensemble à travers une
              communauté forte et dynamique ;
            </li>
            <li>
              • Contribuer au développement et à la promotion de l’EMI et de ses
              Ingénieurs ;
            </li>
            <li>
              • Apporter un soutien actif au développement socio-économique du
              Royaume.
            </li>
          </ul>
          Les actions menées par l’AIEM depuis sa création lui ont valu d’avoir
          une grande reconnaissance au niveau national et international.
          L’association a pu notamment obtenir auprès des Nations Unies le
          statut de membre observateur des COP.
        </p>
        <img src={abt_aiem} className="w-[90%] rounded-lg m-auto my-7" alt="map" />

        <h2 className="text-3xl text-[#484494]  pt-2 text-center font-custom">
          Bureaux
        </h2>
        <ul className="text-center text-[#484494]">
          <li>Rabat-Salé-Kénitra</li>
          <li>Grand Casablanca-Settat</li>
          <li>Marrakech-Safi</li>
          <li>Souss-Massa</li>
          <li>Tanger-Tétouan-Al Hoceïma</li>
          <li>Fès-Meknès</li>
          <li>Béni Mellal-Khouribga</li>
          <li>Laâyoune-Sakia El Hamra</li>
          <li>Oriental</li>
        </ul>
        <h2 className="text-3xl text-[#484494]  pt-2 text-center font-custom">
          Clubs
        </h2>
        <ul className="text-center text-[#484494]">
          <li>Club des Femmes Ingénieurs de l'EMI</li>
          <li>Club Ressources Humaines</li>
          <li>Club Développement Durable</li>
          <li>Club Entrepreneuriat</li>
          <li>Club Digital</li>
        </ul>
        <h2 className="text-3xl text-[#484494]  pt-2 text-center font-custom">
          Présentations internationales
        </h2>
        <ul className="text-center text-[#484494]">
          <li>Bureau AIEM Afrique</li>
          <li>Bureau AIEM Europe</li>
          <li>Bureau AIEM Amérique du Nord</li>
        </ul>
      </div>
      <div className="w-full h-full bg-[#484494] font-custom1 text-lg text-white px-4 py-4 lg:px-32">
        <h1 className="text-5xl text-white  pt-14 pb-6 text-center font-custom">
          À PROPOS DU DDC
        </h1>

        <p className="text-white font-custom1 text-lg break-keep">
        Club de Développement Durable (CDD) Lancé en octobre 2018, le Club de Développement Durable (CDD) est une
          instance thématique relevant de l’Association des Ingénieurs de
          l’École Mohammadia. Il a pour objectif de mettre à la disposition des
          EMIstes et experts œuvrant dans le domaine du développement durable
          une plateforme de réseautage et de mobilisation des énergies pour le
          développement du Maroc.
        </p>
        <img src={cdd_abt} className="lg:w-[60%] w-[90%]  rounded-lg m-auto my-7" alt="cdd" />

        <h2 className="text-3xl text-white  pt-4 lg:py-7 text-center font-custom">Objectifs :</h2>
        <ol className="list-disc pl-10 pr-3">
          <li>
            Créer un espace d’échange entre les EMIstes opérant dans les
            secteurs de l’énergie, de l’environnement, et des politiques
            sectorielles, au service du Maroc et de la communauté de l’AIEM.
          </li>
          <li>
            Echanger sur les sujets d’intérêts nationaux entre professionnels du
            développement durable avec focus sur la Stratégie Nationale de
            Développement Durable (SNDD).
          </li>
          <li>
            Animer des conférences/débats en relation avec les axes de la SNDD.
          </li>
          <li>
            Favoriser la création d’opportunités de collaboration entre les
            membres du CDD et d’autres organismes et institutions.
          </li>
          <li>
            Soutenir les plans lancés par l’Etat (Plan Maroc Vert, Plan EnR,
            Maroc Numeric, etc.) à travers l’organisation de conférences
            nationales.
          </li>
          <li>
            Initier les lauréats de l’EMI et d’autres établissements
            d’enseignement supérieur aux secteurs porteurs de développement
            économique et social.
          </li>
          <li>
            Participer aux évènements nationaux et internationaux d’envergure.
          </li>
        </ol>

        <h2 className="text-3xl text-white  py-4 lg:py-7 text-center font-custom">Axes de travail :</h2>
        <ul className="list-disc pl-10 pr-3 ">
          <li>
            Sensibilisation des étudiants de l’EMI autour du développement
            durable, promotion de l’innovation, brevets, etc.
          </li>
          <li>Participation aux COP à travers des side-events.</li>
          <li>Actions de Développement Territorial Durable.</li>
          <li>
            Plateforme d’échange de bonnes pratiques entre les différents
            acteurs du développement durable.
          </li>
          <li>
            Focus sur les Énergies Renouvelables, l’efficacité énergétique, les
            eaux non conventionnelles, etc.
          </li>
        </ul>
      </div>
      <div className="w-full h-screen bg-white px-4 py-4 lg:px-32">
        <h1 className="text-5xl text-[#484494]  pt-32 pb-6 text-center font-custom">
          In progress ... 
        </h1>
       
      </div>
      <Footer/>
    </>
  );
};

export default About;
