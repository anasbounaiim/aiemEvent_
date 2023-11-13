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
      <div className="w-full h-full bg-white px-4 py-4 lg:px-32">
      <h1 className="text-5xl text-[#484494]  pt-8 pb-6 text-center font-custom">
      A propos de la conférence-débat
        </h1>
        
            <h1 className="text-3xl font-bold mb-4 text-[#484494] lg:mt-8 py-7">I. CONTEXTE ET ENJEUX DE LA GESTION DE L’EAU</h1>
            <p className="text-[#484494] font-custom1 text-lg break-keep">
            Le déficit hydrique en eau au Maroc s’accentuera de plus en plus pour atteindre une pénurie en 2030
              Ce bilan est étroitement lié à plusieurs facteurs dont :
                    <ul class="list-disc pl-8">
                        <li>La croissance démographique, et son corollaire l’urbanisation galopante.</li>
                        <li>L’effet de politiques publiques et de stratégies sectorielles qui ne tiennent pas suffisamment compte des impératifs de durabilité des ressources.</li>
                        <li>L’essor économique et industriel des régions marocaines combiné à une gestion insuffisamment optimisée de cette ressource.</li>
                        <li>L’envasement régulier des barrages qui réduit leur capacité de stockage.</li>
                        <li>La surexploitation des eaux souterraines qui engendre une baisse conséquente du niveau des nappes souterraines.</li>
                        <li>Les impacts des changements climatiques.</li>
                    </ul>
                
                La raréfaction de l’eau menace directement les équilibres économiques, environnementaux et sociaux du pays, particulièrement dans les régions arides et semi-arides.
              Cette situation de stress hydrique chronique (pour mémoire, 2500 m3/hab/an en 1960 à 650 m3/hab/an en 2018, et moins de 500m3/ hab/an en 2030) ne cesse d’accentuer la précarité de la sécurité hydrique du pays dans le sens où :
                    <ul class="list-disc pl-8">
                        <li>Elle reflète la forte vulnérabilité du Maroc face à des usages de l’eau qui n’intègrent pas sa rareté ; et</li>
                        <li>La tarification de l’eau potable, industrielle ou d’irrigation ne traduit pas le coût réel de la ressource et ne favorise pas le recours aux ressources alternatives.</li>
                    </ul>
               
            Partant de ce constat, la gestion intégrée et durable des ressources en eau constitue un enjeu stratégique majeur aux multiples dimensions sociales, économiques et environnementales, nécessitant :
                    <ul class=" pl-8">
                        <li>(1) une approche systémique multi-acteurs et multi-échelles de gouvernance,</li>
                        <li>(2) des solutions institutionnelles, technologiques et financières innovantes qui mettent l’accent sur l’efficience de l’utilisation des ressources en eau de surface et souterraines, et</li>
                        <li>(3) une gestion territorialisée adaptée aux spécificités climatiques régionales et locales.</li>
                    </ul>
               
               Le Nouveau Modèle de Développement (NMD) place cette problématique au coeur des urgences sociétales à traiter dans une approche donnant la primauté à la préservation et une meilleure valorisation des ressources en eau à long terme et une gestion plus rigoureuse de sa rareté pour les générations actuelles et futures ainsi que le recours à la mobilisation des ressources hydriques non conventionnelles grâce à la science, la technologie et l’innovation, notamment à travers :
                    <ul class="list-disc pl-8">
                        <li>La réduction significative des pertes d’eau dans les systèmes de production, d’adduction et de distribution.</li>
                        <li>La rationalisation des ressources en eau souterraines grâce à des modes d’exploitation permettant la capacité de régénération des nappes phréatiques.</li>
                        <li>L’intégration effective des volumes des eaux usées traitées dans la planification du secteur et la prise en charge du traitement et du suivi de leur qualité, y compris la normalisation de la réutilisation sécurisée et saine des eaux usées conformément aux normes établies par l’Organisation Mondiale de la Santé.</li>
                        <li>La systématisation de la réutilisation des eaux usées traitées et de collecte intelligente des eaux pluviales pour soulager la pression sur les barrages et répondre aux besoins en eau des secteurs clés de l’économie nationale (agriculture, industrie, tourisme, énergie, arrosage des espaces verts…).</li>
                        <li>La promotion du dessalement de l’eau de mer en vue d’assurer un approvisionnement en eau économiquement et écologiquement viable des villes côtières et de libérer des ressources hydriques supplémentaires pour les périmètres irrigués. Le caractère très énergivore de ce procédé nécessite la combinaison des technologies de production avec l’utilisation des énergies renouvelables, tout en réduisant les effets néfastes du rejet des déchets (saumures) sur la biodiversité marine.</li>
                    </ul>
            
            </p>

            
            <h2 className="text-3xl font-bold mb-4 text-[#484494] lg:mt-8 py-7">II. OBJECTIFS</h2>
    <p className="text-[#484494] font-custom1 text-lg break-keep py-3">C’est dans ce contexte que s’inscrit l’organisation, par l’Association des Ingénieurs de l’École Mohammadia en partenariat avec l’École Mohammadia d’Ingénieurs, de l’Atelier qui se tiendra le 25 novembre 2023 à l’EMI - Rabat sous le thème :</p>

    <blockquote>
        <p className="text-[#484494] font-custom1 text-lg break-keep font-extrabold">« GESTION DURABLE DE L’EAU VERS UN MODELE INNOVANT ET RESILENT »</p>
    </blockquote>

    <p className="text-[#484494] font-custom1 text-lg break-keep py-3">Ainsi, cette conférence-débat se donne pour objectif de faciliter les échanges et retours d’expériences en matière de planification, de régulation, de financement, de déploiement des technologies de production et d’optimisation des ressources en eau conventionnelles, ainsi que le recours aux eaux non conventionnelles (dessalement de l’eau de mer et l’eau saumâtre, réutilisation des eaux usées, collecte des eaux pluviales, et autres) pour les divers usages agricole, industriel, touristique, etc.). Les échanges mettront également l’accent sur les impacts de ces différentes solutions sur l’environnement, les impératifs d’adaptation au changement climatique et les opportunités d’obtention de dividendes économiques, sociétaux et environnementaux.</p>

    <p className="text-[#484494] font-custom1 text-lg break-keep py-3">Elle devrait ainsi permettre d’avancer la réflexion, selon une approche systémique à long terme, sur les modèles institutionnels et économiques contractuels et de gouvernance innovants, ainsi que sur les solutions alternatives technologiques les plus appropriées, du rôle des PPP (partenariats public-privé) et du quadruple hélix constitué par les chercheurs scientifiques, l’entreprise publique et privée, les régions territoriales et de la société civile pour leur mise en oeuvre afin de relever les défis du stress hydrique au niveau de la Région, en alignement avec les ambitions et les objectifs stratégiques du Nouveau Modèle de Développement.</p>

    <p className="text-[#484494] font-custom1 text-lg break-keep py-3">Afin de mettre en exergue les spécificités régionales, le CDD lancera lors de la conférencedébat, l’initiative intitulée «Territory Lab for Water Sustainability», consistant en une série de rencontres/ateliers régionaux dans les 12 régions du Maroc (en présentiel et/ou en virtuel) qui viendraient renforcer et enrichir les différentes recommandations initiales.</p>

            
           
     
</div>

      <Footer/>
    </>
  );
};

export default About;
